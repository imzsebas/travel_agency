/* =========================================================
   COLOMBIA UNVEILED · script principal
   ---------------------------------------------------------
   Archivos de media que puedes agregar (todos opcionales):
     videos/hero.mp4, videos/cierre.mp4
     videos/providencia.mp4, videos/melcocho.mp4,
     videos/santarosa.mp4, videos/nevado.mp4
     images/<lugar>.jpg        -> foto de respaldo del video
     images/<lugar>-1.jpg ... images/<lugar>-4.jpg -> galería
     musica/fondo.mp3          -> música de fondo
   Si un archivo no existe, la página muestra un degradado.
   ========================================================= */

/* ---------------- TEXTOS DE LA INTERFAZ (ES / EN) ---------------- */
const UI = {
  es: {
    nav_intro: "La idea",
    nav_map: "Mapa",
    nav_game: "Juego",
    nav_founders: "Fundadores",
    founders_sello: "Fundadores",
    founders_eyebrow: "Quiénes somos",
    founders_cargo: "Fundadores | JDP & SN Travel Agency",
    founders_lead: "Dos mentes brillantes, una sociedad internacional y una misión: conquistar el mundo... empezando por Colombia.",
    fc1: "Visionarios", fc2: "Emprendedores", fc3: "Estrategas del turismo", fc4: "Multimillonarios en ideas", fc5: "Viajeros de corazón",
    founders_jet: "No tenemos un jet privado (todavía), pero sí tenemos los mejores destinos para ofrecerte.",
    founders_frase: "Viajar no es gastar dinero, es invertir en historias que contar.",
    founders_cierre: "No vendemos simples viajes, diseñamos experiencias inolvidables.",
    game_eyebrow: "Juego",
    game_title: "¿Quién sabe más de Colombia?",
    game_desc: "Pon a prueba lo que aprendiste: escanea el código, escribe tu nombre y responde 10 preguntas en inglés. Cada acierto suma 100 puntos y el ranking se ve en vivo.",
    game_btn: "Jugar ahora",
    game_panel: "Ver ranking en vivo",
    game_scan: "Escanéame",
    tagline: "EXPLORA • DESCUBRE • VIAJA",
    hero_script: "¡Tu próxima aventura empieza aquí!",
    sv1: "Destinos únicos", sv2: "Planes a tu medida", sv3: "Viajes por Colombia", sv4: "Hoteles y posadas", sv5: "Tours guiados",
    hero_sub: "Del mar de siete azules a las nieves de un volcán: cuatro lugares que te van a enamorar.",
    hero_btn: "¡Vamos!",
    intro_eyebrow: "La idea",
    intro_title: "Hay una Colombia que casi nadie ha visto",
    intro_text: "Lejos de las rutas de siempre hay lugares que parecen sacados de un sueño. Una isla donde el mar cambia de color cada pocos metros, un río tan transparente que parece de cristal, aguas calientes que brotan del volcán y una montaña nevada que toca el cielo. Este recorrido va del nivel del mar hasta las nieves, a más de cinco mil metros de altura. Ponte cómodo y déjate llevar.",
    map_eyebrow: "El recorrido",
    map_title: "¿Dónde quedan estos lugares?",
    map_sub: "Toca cada punto para ver el lugar.",
    map_go: "Ver capítulo",
    map_error: "No se pudo cargar el mapa. Revisa tu conexión a internet.",
    outro_title: "Colombia no se cuenta, ¡se vive!",
    outro_text: "Cuatro lugares, cuatro mundos distintos y un mismo país. Lo que viste aquí es solo una probadita.",
    outro_btn: "Volver al inicio",
    footer_made: "Proyecto académico · Universidad de Córdoba",
    footer_credits: "Algunas imágenes fueron generadas con inteligencia artificial y son ilustrativas. Fotos y videos reales: créditos a sus autores.",
    chapter: "Capítulo",
    music_on: "Música activada",
    music_off: "Música en pausa",
    music_missing: "Aún no hay música. Agrega el archivo musica/fondo.mp3"
  },
  en: {
    nav_intro: "The idea",
    nav_map: "Map",
    nav_game: "Game",
    nav_founders: "Founders",
    founders_sello: "Founders",
    founders_eyebrow: "Who we are",
    founders_cargo: "Founders | JDP & SN Travel Agency",
    founders_lead: "Two brilliant minds, one international partnership and a single mission: to conquer the world... starting with Colombia.",
    fc1: "Visionaries", fc2: "Entrepreneurs", fc3: "Tourism strategists", fc4: "Billionaires in ideas", fc5: "Travelers at heart",
    founders_jet: "We don't have a private jet (yet), but we do have the best destinations to offer you.",
    founders_frase: "Traveling isn't spending money, it's investing in stories to tell.",
    founders_cierre: "We don't sell simple trips, we design unforgettable experiences.",
    game_eyebrow: "Game",
    game_title: "Who knows more about Colombia?",
    game_desc: "Test what you learned: scan the code, type your name and answer 10 questions. Every correct answer is worth 100 points and the ranking updates live.",
    game_btn: "Play now",
    game_panel: "Live leaderboard",
    game_scan: "Scan me",
    tagline: "EXPLORE • DISCOVER • TRAVEL",
    hero_script: "Your next adventure starts here!",
    sv1: "Unique destinations", sv2: "Custom plans", sv3: "Trips across Colombia", sv4: "Hotels & guesthouses", sv5: "Guided tours",
    hero_sub: "From the sea of seven blues to the snows of a volcano: four places you'll fall in love with.",
    hero_btn: "Let's go!",
    intro_eyebrow: "The idea",
    intro_title: "There is a Colombia almost nobody has seen",
    intro_text: "Far from the usual routes there are places that seem taken from a dream. An island where the sea changes color every few meters, a river so clear it looks like glass, hot water rising from a volcano and a snowy mountain that touches the sky. This journey goes from sea level up to the snow, more than five thousand meters high. Get comfortable and let yourself go.",
    map_eyebrow: "The route",
    map_title: "Where these places are",
    map_sub: "Tap each point to see the place.",
    map_go: "See chapter",
    map_error: "The map could not load. Check your internet connection.",
    outro_title: "Colombia isn't told, it's lived!",
    outro_text: "Four places, four different worlds and one country. What you saw here is just a little taste.",
    outro_btn: "Back to the top",
    footer_made: "Academic project · Universidad de Córdoba",
    footer_credits: "Some images were generated with artificial intelligence and are illustrative. Real photos and videos: credit to their authors.",
    chapter: "Chapter",
    music_on: "Music on",
    music_off: "Music paused",
    music_missing: "No music yet. Add the file musica/fondo.mp3"
  }
};

/* ---------------- ÍCONOS SVG (sin emojis) ---------------- */
const ICONOS = {
  ola: '<svg viewBox="0 0 24 24"><path d="M2 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/></svg>',
  gota: '<svg viewBox="0 0 24 24"><path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12z"/><path d="M9 15a3 3 0 0 0 3 3"/></svg>',
  termal: '<svg viewBox="0 0 24 24"><path d="M8 3c-1 1.5 1 3 0 4.5M12 3c-1 1.5 1 3 0 4.5M16 3c-1 1.5 1 3 0 4.5"/><path d="M3 12h18v2a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7z"/></svg>',
  montana: '<svg viewBox="0 0 24 24"><path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M7.5 10.5l1.5 1.5 1.5-1.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  flecha: '<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>'
};

// Busca la foto en varios formatos (jpg, jpeg, png, webp): la que exista es la que se ve
function fotos(base) {
  return ["jpg", "jpeg", "png", "webp"].map(ext => `url("${base}.${ext}")`).join(", ");
}

/* ---------------- LOS 4 LUGARES (orden: del mar a la montaña) ---------------- */
const LUGARES = [
  {
    id: "providencia",
    icono: "ola",
    acento: "#0a7bc2",
    colores: ["#003893", "#0a7bc2", "#22c1d6"],
    coords: [13.35, -81.37],
    es: {
      lugar: "Archipiélago de San Andrés · Caribe",
      nombre: "Providencia",
      frase: "Donde el mar tiene siete azules",
      texto: [
        "Providencia es una isla pequeña y tranquila en medio del Caribe, lejos del ruido y del turismo masivo. Su mar cambia de color a cada paso: turquesa, celeste, azul rey, casi verde. Ese efecto lo crean su origen volcánico y la enorme barrera de coral que la rodea.",
        "Esa barrera es la más extensa de Colombia y una de las más largas del mundo, protegida por el Parque Nacional Old Providence McBean Lagoon. Aquí la gente es raizal, habla inglés criollo, vive de la pesca y del mar, y cuida su isla como un tesoro.",
        "Un puente de madera de colores, el Puente de los Enamorados, la une con la pequeña isla de Santa Catalina. Al atardecer, cruzarlo es uno de esos momentos que no se olvidan."
      ],
      datos: [["7", "tonos de azul en su mar"], ["3.ª", "barrera de coral más larga del mundo"], ["17 km²", "de isla, para recorrer sin afán"], ["15 min", "en avión desde San Andrés"]]
    },
    en: {
      lugar: "San Andrés Archipelago · Caribbean",
      nombre: "Providencia",
      frase: "Where the sea has seven blues",
      texto: [
        "Providencia is a small, quiet island in the middle of the Caribbean, far from noise and mass tourism. Its sea changes color with every step: turquoise, sky blue, royal blue, almost green. That effect comes from its volcanic origin and the huge coral reef that surrounds it.",
        "That reef is the largest in Colombia and one of the longest in the world, protected by the Old Providence McBean Lagoon National Park. The people here are Raizal, speak English Creole, live from fishing and the sea, and look after their island like a treasure.",
        "A colorful wooden bridge, the Lovers' Bridge, connects it to the tiny island of Santa Catalina. Crossing it at sunset is one of those moments you never forget."
      ],
      datos: [["7", "shades of blue in its sea"], ["3rd", "longest coral reef in the world"], ["17 km²", "of island to explore slowly"], ["15 min", "by plane from San Andrés"]]
    }
  },
  {
    id: "melcocho",
    icono: "gota",
    acento: "#1aa37a",
    colores: ["#0b6e4f", "#1aa37a", "#7ad3a8"],
    coords: [6.02, -75.17],
    es: {
      lugar: "Oriente de Antioquia",
      nombre: "Río Melcocho",
      frase: "Un río tan claro que parece de cristal",
      texto: [
        "En el oriente de Antioquia, entre El Carmen de Viboral y Cocorná, corre un río que muchos llaman el más bonito del departamento. Su agua es tan transparente que, al nadar, puedes ver cada piedra del fondo como si no hubiera agua.",
        "El río baja por un cañón de rocas enormes y bosque verde, formando charcos, pozos y pequeñas cascadas. Caminar por su orilla es escuchar solo el agua, los pájaros y el viento entre los árboles.",
        "Lo más bonito es cómo lo cuidan: la comunidad campesina organizó el turismo para que no se dañe. Solo se entra con reserva previa y el río se cierra algunos días al año para que descanse."
      ],
      datos: [["~2 h", "desde Medellín por carretera"], ["Cristal", "agua tan clara que se ve el fondo"], ["Reserva", "previa obligatoria para entrar"], ["Cañón", "de rocas, bosque y cascadas"]]
    },
    en: {
      lugar: "Eastern Antioquia",
      nombre: "Melcocho River",
      frase: "A river so clear it looks like glass",
      texto: [
        "In eastern Antioquia, between El Carmen de Viboral and Cocorná, flows a river many call the most beautiful in the region. Its water is so clear that when you swim you can see every stone on the bottom, as if there were no water at all.",
        "The river runs through a canyon of huge rocks and green forest, creating pools, swimming holes and small waterfalls. Walking along its banks means hearing only the water, the birds and the wind in the trees.",
        "The most beautiful part is how it is protected: the local farming community organized tourism so the river is not harmed. You can only visit with a prior booking, and the river closes some days a year to rest."
      ],
      datos: [["~2 h", "by road from Medellín"], ["Glass", "water so clear you can see the bottom"], ["Booking", "required before visiting"], ["Canyon", "of rocks, forest and waterfalls"]]
    }
  },
  {
    id: "santarosa",
    icono: "termal",
    acento: "#CE1126",
    colores: ["#8f0b1a", "#CE1126", "#f28c28"],
    coords: [4.84, -75.56],
    es: {
      lugar: "Santa Rosa de Cabal · Risaralda",
      nombre: "Termales de Santa Rosa",
      frase: "Agua caliente que nace del volcán",
      texto: [
        "En las montañas de Risaralda, en pleno Eje Cafetero, el calor de los volcanes cercanos calienta el agua bajo la tierra. Esa agua sale a la superficie y llena piscinas naturales que humean en medio del bosque.",
        "Lo más impresionante es el paisaje: los termales están al pie de cascadas altísimas que caen por la montaña. Estar dentro del agua caliente, con el aire frío en la cara y el sonido de la cascada, es pura magia.",
        "Más arriba, entre la niebla, está la Reserva Termal San Vicente, un lugar más salvaje y escondido. Y de vuelta en el pueblo, no te puedes ir sin probar el famoso chorizo santarrosano."
      ],
      datos: [["3", "complejos termales famosos"], ["Volcán", "el origen del agua caliente"], ["Cascadas", "que caen junto a las piscinas"], ["Chorizo", "santarrosano, sabor obligado"]]
    },
    en: {
      lugar: "Santa Rosa de Cabal · Risaralda",
      nombre: "Santa Rosa Hot Springs",
      frase: "Hot water born from the volcano",
      texto: [
        "In the mountains of Risaralda, in the heart of the Coffee Region, the heat of nearby volcanoes warms the water underground. That water rises to the surface and fills natural pools that steam in the middle of the forest.",
        "The most impressive part is the landscape: the hot springs sit at the foot of very tall waterfalls tumbling down the mountain. Being in the warm water, with cold air on your face and the sound of the falls, is pure magic.",
        "Higher up, in the mist, is the San Vicente Thermal Reserve, a wilder and more hidden spot. And back in town, you can't leave without trying the famous Santa Rosa chorizo."
      ],
      datos: [["3", "famous hot spring complexes"], ["Volcano", "the source of the hot water"], ["Waterfalls", "falling right next to the pools"], ["Chorizo", "from Santa Rosa, a must-try"]]
    }
  },
  {
    id: "nevado",
    icono: "montana",
    acento: "#e8a200",
    colores: ["#3d5a80", "#9cc3e0", "#e8a200"],
    coords: [4.892, -75.322],
    es: {
      lugar: "Entre Caldas y Tolima",
      nombre: "Nevado del Ruiz",
      frase: "El volcán que toca el cielo",
      texto: [
        "A 5.321 metros sobre el nivel del mar se levanta el Nevado del Ruiz, la cumbre más famosa del Parque Nacional Natural Los Nevados. Los indígenas lo llamaban Cumanday, y desde lejos parece una montaña blanca flotando sobre las nubes.",
        "Para llegar se sube desde Manizales hasta el sector Brisas, a más de 4.000 metros de altura. Desde ahí se camina hasta el Valle de las Tumbas, un desierto de ceniza volcánica de colores grises y rojizos con vista al cráter y a los glaciares. En el camino aparecen páramos llenos de frailejones y lagunas de origen glaciar.",
        "Es un volcán activo, vigilado todo el tiempo por el Servicio Geológico Colombiano, y su glaciar se ha reducido mucho en las últimas décadas. Por eso se visita con guía, solo en las zonas permitidas y revisando antes el estado de alerta. Verlo de cerca es un privilegio que hay que cuidar."
      ],
      datos: [["5.321 m", "de altura en su cumbre"], ["4.400 m", "Valle de las Tumbas, punto de la visita"], ["1974", "año de creación del parque"], ["Glaciar", "uno de los pocos que quedan en Colombia"]]
    },
    en: {
      lugar: "Between Caldas and Tolima",
      nombre: "Nevado del Ruiz",
      frase: "The volcano that touches the sky",
      texto: [
        "At 5,321 meters above sea level rises the Nevado del Ruiz, the most famous peak of Los Nevados National Natural Park. Indigenous people called it Cumanday, and from afar it looks like a white mountain floating above the clouds.",
        "To get there you drive up from Manizales to the Brisas sector, more than 4,000 meters high. From there you walk to the Valley of the Tombs, a desert of volcanic ash in grey and reddish tones with views of the crater and the glaciers. Along the way you find páramos full of frailejones and glacial lakes.",
        "It is an active volcano, monitored at all times by the Colombian Geological Service, and its glacier has shrunk a lot in recent decades. That is why it is visited with a guide, only in permitted areas and after checking the alert level. Seeing it up close is a privilege worth protecting."
      ],
      datos: [["5,321 m", "high at its summit"], ["4,400 m", "Valley of the Tombs, the visit point"], ["1974", "year the park was created"], ["Glacier", "one of the few left in Colombia"]]
    }
  }
];

/* ---------------- AYUDANTES ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
let idioma = "es";

function aviso(texto) {
  const t = $("#toast");
  t.textContent = texto;
  t.classList.add("is-show");
  clearTimeout(aviso.timer);
  aviso.timer = setTimeout(() => t.classList.remove("is-show"), 2600);
}

// En celular con ahorro de datos no cargamos videos
const ahorroDatos = navigator.connection && navigator.connection.saveData;

/* ---------------- FONDOS: degradado + foto + video ---------------- */
function armarMedia(el) {
  const colores = (el.dataset.colors || "#0b1d2a,#12403a,#3a2a12").split(",");

  // 1) Degradado animado (siempre se ve si no hay foto ni video)
  const fondo = document.createElement("div");
  fondo.className = "media__fallback";
  fondo.style.backgroundImage = `linear-gradient(120deg, ${colores.join(",")})`;
  el.appendChild(fondo);

  // 2) Foto (si existe en la carpeta images)
  if (el.dataset.poster) {
    const foto = document.createElement("div");
    foto.className = "media__poster";
    foto.style.backgroundImage = fotos(el.dataset.poster.replace(/\.\w+$/, ""));
    el.appendChild(foto);
  }

  // 3) Video (si existe en la carpeta videos)
  if (el.dataset.video && !ahorroDatos) {
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "metadata";
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    const base = el.dataset.video.replace(/\.\w+$/, "");
    ["mp4", "webm", "mov"].forEach(ext => {
      const src = document.createElement("source");
      src.src = `${base}.${ext}`;
      src.type = ext === "mov" ? "video/mp4" : `video/${ext}`;
      video.appendChild(src);
    });
    video.addEventListener("canplay", () => video.classList.add("is-ready"));
    // si ningún formato existe, quitamos el video y queda la foto o el degradado
    video.lastChild.addEventListener("error", () => video.remove());
    el.appendChild(video);
  }
}

/* ---------------- CREAR LOS CAPÍTULOS ---------------- */
const contenedor = $("#chapters");

LUGARES.forEach((l, i) => {
  const sec = document.createElement("section");
  sec.className = "chapter";
  sec.id = l.id;
  sec.style.setProperty("--acento", l.acento);
  sec.innerHTML = `
    <!-- Fondo de video del destino: se queda fijo mientras recorres todo el capítulo -->
    <div class="chapter__bg">
      <div class="media"
           data-video="videos/${l.id}.mp4"
           data-poster="images/${l.id}.jpg"
           data-colors="${l.colores.join(",")}"></div>
      <div class="chapter__tint"></div>
    </div>
    <div class="chapter__hero">
      <div class="chapter__content"></div>
    </div>
    <div class="chapter__body">
      <div class="chapter__text reveal"></div>
      <ul class="facts reveal"></ul>
    </div>
  `;
  contenedor.appendChild(sec);

});

// Pinta los textos de los capítulos en el idioma actual
function textosCapitulos() {
  LUGARES.forEach((l, i) => {
    const d = l[idioma];
    const sec = $("#" + l.id);
    $(".chapter__content", sec).innerHTML = `
      <div><span class="chapter__num">${i + 1}</span><span class="chapter__place">${ICONOS.pin}${d.lugar}</span></div>
      <h2 class="chapter__name">${d.nombre}</h2>
      <p class="chapter__tagline">${d.frase}</p>
    `;
    $(".chapter__text", sec).innerHTML = d.texto.map(p => `<p>${p}</p>`).join("");
    $(".facts", sec).innerHTML = d.datos.map(([b, s]) => `<li class="fact"><b>${b}</b><span>${s}</span></li>`).join("");
  });
}

/* ---------------- ONDAS TRICOLOR ---------------- */
// Dibuja una onda que se repite (ancho 2880 = 2 periodos, para que el movimiento no tenga cortes)
function onda(y, alto) {
  return `M0 ${y} Q360 ${y - alto} 720 ${y} T1440 ${y} T2160 ${y} T2880 ${y} V120 H0 Z`;
}
function pintarOlas() {
  $$(".olas").forEach(el => {
    // Por defecto: amarillo, azul, rojo y al final el color de la sección siguiente
    const capas = (el.dataset.capas || "#FCD116,#003893,#CE1126,#0b1f4d").split(",");
    const n = capas.length;
    const paths = capas.map((color, k) => {
      const y = 25 + k * (80 / n);              // cada capa un poco más abajo
      const alto = (k % 2 ? -1 : 1) * (14 + k * 3); // alternar dirección de la onda
      return `<path class="ola ola--${(k % 4) + 1}" fill="${color}" d="${onda(y, alto)}"/>`;
    }).join("");
    el.innerHTML = `<svg viewBox="0 0 2880 120" preserveAspectRatio="none">${paths}</svg>`;
  });
}

// Armar todos los fondos (portada, capítulos y cierre)
$$(".media").forEach(armarMedia);
pintarOlas();

/* ---------------- IDIOMA ES / EN ---------------- */
const switchIdioma = $("#langToggle");

function cambiarIdioma(nuevo) {
  idioma = nuevo;
  document.documentElement.lang = nuevo;
  switchIdioma.checked = nuevo === "en";
  $$("[data-i18n]").forEach(el => {
    const txt = UI[nuevo][el.dataset.i18n];
    if (txt) el.textContent = txt;
  });
  textosCapitulos();
  actualizarMapa();
  try { localStorage.setItem("jdpsn-idioma", nuevo); } catch (e) {}
}

switchIdioma.addEventListener("change", () => cambiarIdioma(switchIdioma.checked ? "en" : "es"));

/* ---------------- MÚSICA ---------------- */
const musica = $("#bgMusic");
const btnMusica = $("#musicBtn");
musica.volume = 0.5;

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play()
      .then(() => { btnMusica.classList.add("is-playing"); aviso(UI[idioma].music_on); })
      .catch(() => aviso(UI[idioma].music_missing));
  } else {
    musica.pause();
    btnMusica.classList.remove("is-playing");
    aviso(UI[idioma].music_off);
  }
});

/* ---------------- MENÚ ---------------- */
const topbar = $("#topbar");
const menu = $("#menu");
const burger = $("#burger");

window.addEventListener("scroll", () => topbar.classList.toggle("is-scrolled", scrollY > 60), { passive: true });

burger.addEventListener("click", () => {
  menu.classList.toggle("is-open");
  burger.classList.toggle("is-open");
});
$$("a", menu).forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("is-open");
  burger.classList.remove("is-open");
}));

/* ---------------- PUNTOS LATERALES + SECCIÓN ACTIVA ---------------- */
const secciones = [
  ["inicio", "Inicio"], ["intro", "Intro"],
  ...LUGARES.map(l => [l.id, l.es.nombre]),
  ["mapa", "Mapa"], ["fundadores", "Fundadores"], ["juego", "Juego"], ["cierre", "Fin"]
];
$("#dots").innerHTML = secciones.map(([id, n]) => `<a href="#${id}" data-id="${id}"><span>${n}</span></a>`).join("");

const vigia = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.id;
    $$("#dots a").forEach(a => a.classList.toggle("is-active", a.dataset.id === id));
    $$(".menu a").forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
secciones.forEach(([id]) => { const s = document.getElementById(id); if (s) vigia.observe(s); });

/* ---------------- APARICIÓN AL HACER SCROLL ---------------- */
const aparecer = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      aparecer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
$$(".reveal, .chapter").forEach(el => aparecer.observe(el));

// Pausar videos que no se ven (ahorra batería y datos)
const videosVisibles = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    const v = $("video", e.target);
    if (!v) return;
    e.isIntersecting ? v.play().catch(() => {}) : v.pause();
  });
});
$$(".media").forEach(m => videosVisibles.observe(m));

/* ---------------- MARIPOSAS ---------------- */
const zona = $("#butterflies");
for (let i = 0; i < (innerWidth < 760 ? 3 : 6); i++) {
  const b = document.createElement("span");
  b.className = "butterfly";
  b.innerHTML = '<img src="avion.svg" alt="">';
  b.style.top = 8 + Math.random() * 55 + "%";
  b.style.width = 70 + Math.random() * 70 + "px";
  b.style.animationDuration = 14 + Math.random() * 12 + "s";
  b.style.animationDelay = -Math.random() * 20 + "s";
  zona.appendChild(b);
}

/* ---------------- MAPA ---------------- */
let mapa = null;
const marcadores = [];

function crearMapa() {
  if (typeof L === "undefined") {
    $("#map").innerHTML = `<p style="padding:3rem;color:#a7adb5">${UI[idioma].map_error}</p>`;
    return;
  }
  mapa = L.map("map", { scrollWheelZoom: false, zoomControl: true });
  // Mapa de OpenStreetMap: gratis y sin API key
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mapa);

  LUGARES.forEach(l => {
    const icono = L.divIcon({ className: "", html: `<div class="map-pin" style="--pin:${l.acento}"></div>`, iconSize: [26, 26], iconAnchor: [13, 13] });
    const m = L.marker(l.coords, { icon: icono }).addTo(mapa);
    m.lugar = l;
    marcadores.push(m);
  });

  // Línea punteada del recorrido
  L.polyline(LUGARES.map(l => l.coords), { color: "#CE1126", weight: 3, dashArray: "2 10", lineCap: "round", opacity: 0.9 }).addTo(mapa);

  mapa.fitBounds(L.latLngBounds(LUGARES.map(l => l.coords)), { padding: [60, 60] });
  actualizarMapa();
}

function actualizarMapa() {
  marcadores.forEach(m => {
    const d = m.lugar[idioma];
    m.bindPopup(`<b>${d.nombre}</b>${d.lugar}<br><br><a href="#${m.lugar.id}">${UI[idioma].map_go}</a>`);
  });
}

/* ---------------- ÍCONOS EN LA RUTA ---------------- */
$$("[data-ico]").forEach(el => (el.innerHTML = ICONOS[el.dataset.ico]));

/* ---------------- INICIO ---------------- */
crearMapa();
let guardado = "es";
try { guardado = localStorage.getItem("jdpsn-idioma") || "es"; } catch (e) {}
cambiarIdioma(guardado);