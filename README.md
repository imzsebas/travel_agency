# JDP & SN Travel Agency · Explora, descubre, viaja

Página web visual (HTML, CSS y JavaScript) que muestra cuatro lugares de Colombia,
del mar a la montaña:

1. **Providencia** (Caribe)
2. **Río Melcocho** (Antioquia)
3. **Termales de Santa Rosa de Cabal** (Risaralda)
4. **Nevado del Ruiz** (Caldas y Tolima)

Usa la identidad de JDP & SN Travel Agency (logo oficial `logo-jdpsn.webp`, versión pequeña `logo-jdpsn-small.webp`, ícono `favicon.png` y aviones animados `avion.svg`), ondas con los colores de la bandera, videos de fondo, mapa, un switch de idioma **ES / EN** y un botón de música.

## Carpetas

```
colombia-unveiled/
├── index.html
├── logo-jdpsn.webp        ← logo oficial (portada y cierre)
├── logo-jdpsn-small.webp  ← logo pequeño (barra y pie)
├── favicon.png            ← ícono de la pestaña
├── avion.svg      ← avioncito que vuela en la portada
├── styles.css
├── script.js        ← aquí están los textos en español e inglés
├── videos/          ← videos de fondo (.mp4 o .webm)
├── images/          ← fotos (.jpg, .png o .webp)
└── musica/          ← música de fondo (.mp3)
```

La página funciona aunque las carpetas estén vacías: muestra degradados de colores en vez de
fotos y videos. A medida que agregas archivos con **estos nombres exactos**, aparecen solos.

### Videos (carpeta `videos/`)

| Archivo            | Dónde sale                  |
|--------------------|-----------------------------|
| `hero.mp4`         | Portada                     |
| `providencia.mp4`  | Fondo del capítulo 1        |
| `melcocho.mp4`     | Fondo del capítulo 2        |
| `santarosa.mp4`    | Fondo del capítulo 3        |
| `nevado.mp4`      | Fondo del capítulo 4        |
| `cierre.mp4`       | Sección final               |

Cada video de destino queda de fondo durante TODO su capítulo (título, texto, datos y galería),
y cambia al video del siguiente destino cuando bajas. Si no hay video, se usa la foto del destino
y si tampoco hay foto, un degradado con los colores del lugar.

Recomendado: clips de 10 a 20 segundos, sin sonido, en 1280×720 o 1920×1080, de menos de 10 MB cada uno.

### Fotos (carpeta `images/`)

- **Foto de respaldo del video** (se ve mientras carga o en celulares con ahorro de datos):
  `hero.jpg`, `providencia.jpg`, `melcocho.jpg`, `santarosa.jpg`, `nevado.jpg`, `cierre.jpg`

### Música (carpeta `musica/`)

Guarda la canción como `musica/fondo.mp3`. Suena solo cuando el visitante toca el botón
de las barritas (los navegadores no dejan poner música sola al abrir la página).

## Dónde conseguir videos y fotos gratis

- [Pexels](https://www.pexels.com/es-es/videos/) · [Pixabay](https://pixabay.com/es/videos/)
- Busca: *Providencia island*, *crystal river*, *hot springs waterfall*, *frailejones*, *Nevado del Ruiz*, *páramo*.
- Música libre: [Pixabay Music](https://pixabay.com/es/music/) o la Biblioteca de audio de YouTube.

## Publicar en GitHub Pages

1. Crea un repositorio, por ejemplo `jdp-sn-travel`.
2. Sube todo el contenido de la carpeta.
3. Ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda.
4. En uno o dos minutos queda en `https://TU-USUARIO.github.io/jdp-sn-travel/`.

GitHub Pages permite hasta 1 GB por sitio y archivos de máximo 100 MB, así que con videos
comprimidos no hay problema.

## Cambiar textos

Todos los textos de los lugares están en `script.js`, dentro de `LUGARES`, con su versión
`es` (español) y `en` (inglés). Los textos generales están arriba, en `UI`.


## Juego "Who knows more about Colombia?" (en vivo)

| Archivo | Para qué sirve |
|---|---|
| `quiz.html` | El juego para los celulares (en inglés). Cada jugador escribe su nombre y responde 10 preguntas. 100 puntos por acierto. |
| `panel.html` | Pantalla para el video beam: QR, ranking en vivo y botón del podio (oro, plata, bronce). |
| `quiz.css` | Estilos del juego y del panel. |
| `quiz-db.js` | Conexión con Supabase. Aquí se pegan la URL y la llave. |
| `setup.sql` | Crea la tabla `players` en Supabase. |
| `qr-quiz.png` | QR que lleva a `https://imzsebas.github.io/travel_agency/quiz.html` |

### Conectar Supabase (una sola vez)

1. Entra a https://supabase.com y crea un proyecto nuevo (gratis).
2. Ve a **SQL Editor > New query**, pega todo el contenido de `setup.sql` y dale **Run**.
3. Ve a **Project Settings > API** y copia:
   - **Project URL**
   - **anon public** (la llave pública)
4. Abre `quiz-db.js` y pégalas en `SUPABASE_URL` y `SUPABASE_KEY`.
5. Sube los cambios con `git add .`, `git commit` y `git push`.

Mientras esos dos campos estén vacíos, el juego funciona en **modo prueba**: los puntajes se
guardan solo en el navegador donde se juega. Sirve para probar abriendo `panel.html` en una
pestaña y `quiz.html` en otras pestañas del mismo navegador.

### Cómo usarlo en la exposición

1. Proyecta `panel.html` en el video beam.
2. Los compañeros escanean el QR, escriben su nombre y juegan.
3. El ranking se mueve en vivo con cada respuesta.
4. Cuando todos terminen, presiona **Show podium**.
5. Para otra ronda, presiona **New game** dos veces (borra a todos los jugadores).

Si cambias el nombre del repositorio o del usuario, el QR hay que generarlo de nuevo.
