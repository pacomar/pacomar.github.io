# PacoGames · web

Se publica sola con GitHub Pages en https://pacomar.github.io (rama `master`).

| Ruta | Qué es |
|---|---|
| `/` | Escaparate de los juegos con enlaces a las tiendas |
| `/privacy.html` | Política de privacidad (la URL está en App Store y Google Play: **no moverla**) |
| `/app-ads.txt` | Verificación de AdMob (**debe estar en la raíz**) |
| `/zengarden/` | Página puente que comparte el juego (manda a App Store o Google Play; `?code=` amigo) |
| `/admin/` | Panel de administración de Supabase (solo entran los administradores; no indexado) |
| `/album/` | (futuro) álbum de colecciones de todos los juegos |

Juego nuevo: añade su tarjeta en `index.html` y su carpeta `/<juego>/` copiando `zengarden/`.
