/* =========================================================
   QUIZ · datos compartidos de los jugadores
   ---------------------------------------------------------
   1) Crea un proyecto gratis en https://supabase.com
   2) En el SQL Editor ejecuta el archivo setup.sql
   3) En Project Settings > API copia la "Project URL" y la
      "anon public key" y pégalas aquí abajo.

   Si dejas los dos campos vacíos, el juego funciona en
   MODO PRUEBA: los datos se guardan solo en este navegador
   (sirve para probar con varias pestañas en tu computador).
   ========================================================= */
const SUPABASE_URL = "https://fbmiazcvouagbrrswyfl.supabase.co";   // proyecto jdp-sn-quiz
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibWlhemN2b3VhZ2JycnN3eWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2OTQxOTMsImV4cCI6MjExMDI3MDE5M30.xf5C0FrFQR0xZjxkBtEwAk_Fd5YuCVR8Kb88s550BhE";   // llave pública (anon), es seguro tenerla aquí

/* --------------------------------------------------------- */
const QuizDB = (() => {
  const configurado = Boolean(SUPABASE_URL && SUPABASE_KEY);
  const usarSupabase = configurado && window.supabase;
  const TABLA = "players";

  /* ---------------- ERROR: hay llaves pero no cargó la librería ---------------- */
  if (configurado && !window.supabase) {
    console.error("[QuizDB] No se pudo cargar la librería de Supabase (revisa internet o bloqueadores).");
    const falla = async () => { throw new Error("Supabase library not loaded"); };
    return { modo: "error", ordenar: (l) => l, join: falla, update: falla, get: async () => null, list: async () => [], subscribe() {}, reset: falla };
  }

  // Ordena: más puntos primero; si empatan, el que llegó antes a ese puntaje
  function ordenar(lista) {
    return [...lista].sort((a, b) =>
      b.score - a.score ||
      (b.answered - a.answered) ||
      new Date(a.updated_at) - new Date(b.updated_at)
    );
  }

  /* ---------------- MODO SUPABASE (tiempo real) ---------------- */
  if (usarSupabase) {
    const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    return {
      modo: "supabase",
      ordenar,
      async join(name) {
        const { data, error } = await sb.from(TABLA).insert({ name }).select().single();
        if (error) throw error;
        return data;
      },
      async update(id, campos) {
        const { error } = await sb.from(TABLA).update({ ...campos, updated_at: new Date().toISOString() }).eq("id", id);
        if (error) throw error;
      },
      async get(id) {
        const { data } = await sb.from(TABLA).select("*").eq("id", id).maybeSingle();
        return data;
      },
      async list() {
        const { data, error } = await sb.from(TABLA).select("*");
        if (error) throw error;
        return ordenar(data || []);
      },
      subscribe(callback) {
        sb.channel("players-live")
          .on("postgres_changes", { event: "*", schema: "public", table: TABLA }, () => callback())
          .subscribe((estado) => console.log("[QuizDB] realtime:", estado));
        setInterval(callback, 5000); // respaldo por si se corta la conexión en vivo
      },
      async reset() {
        const { error } = await sb.from(TABLA).delete().not("id", "is", null);
        if (error) throw error;
      }
    };
  }

  /* ---------------- MODO PRUEBA (solo este navegador) ---------------- */
  const KEY = "jdpsn-quiz-players";
  const canal = "BroadcastChannel" in window ? new BroadcastChannel("jdpsn-quiz") : null;
  const leer = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const guardar = (lista) => {
    try { localStorage.setItem(KEY, JSON.stringify(lista)); } catch (e) {}
    if (canal) canal.postMessage("cambio");
  };
  const nuevoId = () => "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  return {
    modo: "local",
    ordenar,
    async join(name) {
      const ahora = new Date().toISOString();
      const p = { id: nuevoId(), name, score: 0, answered: 0, results: "", finished: false, created_at: ahora, updated_at: ahora };
      guardar([...leer(), p]);
      return p;
    },
    async update(id, campos) {
      guardar(leer().map(p => p.id === id ? { ...p, ...campos, updated_at: new Date().toISOString() } : p));
    },
    async get(id) { return leer().find(p => p.id === id) || null; },
    async list() { return ordenar(leer()); },
    subscribe(callback) {
      if (canal) canal.onmessage = () => callback();
      window.addEventListener("storage", (e) => { if (e.key === KEY) callback(); });
      setInterval(callback, 3000);
    },
    async reset() { guardar([]); }
  };
})();

// Evita que un nombre con símbolos raros dañe la página
function escaparHTML(t) {
  return String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
