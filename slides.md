---
# try also 'default' to start simple
theme: penguin
colorSchema: 'auto'
layout: intro
logoHeader: '/as-avatar.png'
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Añade 3D a tu aplicación de Vue con Trois.js

(Three.js + Vite + Vue3)

---
layout: presenter
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
presenterImage: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1622370075/as-portfolio/alvaro_saburido.jpg'
---

# Alvaro Saburido Rodriguez

Senior Front-end Engineer at <fancy-link  href="https://bcn.porsche.digital/en/" favicon="https://www.google.com/s2/favicons?domain=porsche.com" >Porsche Digital</fancy-link>

- Tech lead & Dev Advocate
- Escribo en <fancy-link href="https://dev.to/alvarosaburido">@alvarosaburido</fancy-link> & <fancy-link href="https://vuedose.tips/authors/alvaro-saburido-rodriguez/">VueDose</fancy-link>
- Portfolio <fancy-link href="https://alvarosaburido.dev">alvarosaburido.dev</fancy-link>
- Salúdame <fancy-link href="https://twitter.com/alvaro_code">@alvaro_code</fancy-link>

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Porsche Digital Barcelona Slide

---
eventLogo: https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg
eventUrl: https://www.meetup.com/VueJS-Madrid/
twitter: '@alvaro_code'
twitterUrl: https://twitter.com/alvaro_code
---

# ¿Qué veremos hoy?

- **¿Qué es Trois.js** Vite + Vue3 + Three.js
- **Conceptos básicos de 3D en Web**
- **Instalación**
- **Core components** (Renderer, Camera, Scene, Render loop)
- **Lights (Iluminación)** 💡
- **Materiales** 🪵
- **Meshes**
- **Modelos** (`.gltf`/`.glb` y `.fbx`)

<!--
Ask audience how many of you have work with 3D on web?
-->

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# ¿Qué es Trois.js?
    
Es un proyecto open-source que combina la librería mas popular de WebGL <fancy-link href="https://threejs.org/">ThreeJS</fancy-link> con la velocidad de <fancy-link href="https://vitejs.dev/">ViteJS / HMR</fancy-link> usando nuestro framework favorito <fancy-link href="https://v3.vuejs.org/">VueJS v3</fancy-link>

<i>Trois.js</i> significa <i>Three</i>  (3) en francés 🇫🇷  siguiendo la curiosa convención de otras tecnologías relacionadas con <i>Vue (Vista)</i>  y <i>Vite</i>  (Rápido)

::window::
<PlanetExample class="w-full h-200px" />

<!--
Ask audience how many of you have use Vite, Composition API etc?
-->

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# ViteJS 

<fancy-link href="https://vitejs.dev/">ViteJS</fancy-link> es el Eminem de las utilidades de Front-end

![Eminem](https://media.giphy.com/media/xUOxfjO8RkjxyqbPe8/giphy.gif)

---
layout: text-image
media: https://media.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Instalación

```bash
npm install three@0.134 troisjs

yarn add three@0.134 troisjs
```

---
layout: text-image
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Uso

Puedes instalarlo via plugin

```ts
import { createApp } from 'vue';
import { TroisJSVuePlugin } from 'troisjs';

const app = createApp(App);

app.use(TroisJSVuePlugin);
```

<p class="bg-yellow-200 p-4 text-sm rounded">⚠️ No utilices este método (plugin) si tu proyecto requiere tree shaking y soporte para Typescript.</p>

---
layout: text-image
media: https://res.cloudinary.com/alvarosaburido/image/upload/v1633253957/blog/Going%203d%20with%20Troisjs/troisjs-cube-example.png
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Uso

O puedes importarlo directamente en tu componente (Preferido).

```ts
<script setup lang="ts">
import { 
  Box, 
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene 
} from 'troisjs';
</script>

```

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Conceptos básicos de 3D en Web

<BasicsDraw />

<!--
- **Geometría**: es la forma del objeto, esta compuesta por vértices (puntos)
- **Material**: De qué esta hecho el objeto
- **Mesh**: la combinación entre la **Geometría** y el **Material**
- **Escena**: Una escena es la combinación de objetos formando una unidad significativa
- **Cámara**: Define como proyectar el contenido de la **Escena** 3D a un plano de espacio 2D
-->
---
layout: text-image
media: https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1000,gravity=0.5x0.5,format=auto/wp-content/uploads/2020/12/10183327/polygons-are-a-fundamental-building-block-of-3d-mo-autodesk-201210_download.jpg
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Conceptos básicos de 3D en Web

- **Vértice**: un solo punto. 
- **Borde**: Una línea recta que conecta dos vértices. Los bordes ayudan a definir la forma de un modelo 3D.
- **Polígono**: cualquier forma que se forma al conectar líneas rectas. 
- **Cara**: la parte más básica de una malla poligonal. Ayuda a llenar el espacio entre los bordes.

---
layout: new-section
media: https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1000,gravity=0.5x0.5,format=auto/wp-content/uploads/2020/12/10183327/polygons-are-a-fundamental-building-block-of-3d-mo-autodesk-201210_download.jpg
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Core components

Renderer, Camera, Scene, Render loop

<PlanetExample class="w-1/2 rounded mx-auto overflow-hidden" />

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Renderer
    
Es el componente principal `wrapper` que renderiza la `escena` en WebGL.

```html
<Renderer ref="renderer">
  ...
</Renderer>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/renderer.html#custom-props)

::window::

```ts
<script setup lang="ts">
  const renderer = ref(null);

  onMounted(() => {
    renderer?.value?.onBeforeRender(() => {
      // your code
    })
  })
</script>
```

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Camera
    
Es uno de los componentes más importantes por qué define el plano 

```html
<Renderer orbit-ctrl ref="renderer">
  <Camera :position="{ x: 40 }" />
  <Scene ref="scene">
    ...
  </Scene>
</Renderer>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/scene.html)

::window::

<CameraExample />

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Scene
    
Es el componente que define la `escena` en WebGL. Todos los componentes a excepción de `<Renderer />` (padre) y `<Camera />` deben ser hijos de `Scene`

```html
<Renderer orbit-ctrl ref="renderer">
  <Camera :position="{ z: 10 }" />
  <Scene ref="scene">
    ...
  </Scene>
</Renderer>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/scene.html)

::window::

```ts
<script setup lang="ts">
  const scene = ref(null);

  onMounted(() => {
    console.log(scene.value)
  })
</script>
```

---
layout: text-image
media: /public/frames-per-second-diagram.png
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Render loop
    
Similar al loop de los videojuegos, TroisJS lanza un `requestAnimationFrame` loop para renderizar la escena frame by frame, corriendo hasta **60 frames por segundo**. Esto significa que tu codigo se ejecuta 60 veces cada segundo.

<p class="bg-yellow-200 p-4 text-sm rounded">⚠️ Trata de no usar reactividad para actualizar los componentes de TroisJS (puede afectar performance), se recomienda actualizar directamente los objetos de ThreeJS</p>

Documentación completa en este [link](https://troisjs.github.io/guide/core/raf.html)

---
layout: text-window
media: /public/frames-per-second-diagram.png
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Not suggested use 



```ts
const sphere = ref(null)
const spherePosition = reactive({
  spherePosX: -2,
  spherePosY: -2,
  spherePosZ: -2,
})
```

```ts
<Sphere
  ref="sphere"
  :position="{
    x: spherePosition.spherePosX,
    y: spherePosition.spherePosY,
    z: spherePosition.spherePosZ,
  }">
  ...
</Sphere>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/scene.html)

::window::

<IncorrectReactivity class="h-300px"/>

---
layout: text-window
media: /public/frames-per-second-diagram.png
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Suggested use 

```ts
const sphere = ref(null)
const spherePosition = reactive({
  spherePosX: 2,
  spherePosY: 2,
  spherePosZ: 2,
})
watch(spherePosition, ({ spherePosX, spherePosY, spherePosZ }) => {
  sphere.value.mesh.position.x = spherePosX
  sphere.value.mesh.position.y = spherePosY
  sphere.value.mesh.position.z = spherePosZ
})
```

```ts
<Sphere
  ref="sphere"
>
  ...
</Sphere>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/scene.html)

::window::

<CorrectReactivity class="h-300px"/>

---
layout: new-section
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Features

Lights, Materiales, Formas, Modelos

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Lights 

Las luces son un componente fundamental de una escena 3D, permite añadir focos de luz para iluminar objetos y la generación matemática de sombras etc.

```ts
<Scene>
  <PointLight :position="{ y: 50, z: 50 }" />
  <AmbientLight />
</Scene>
```

Documentación completa en este [link](https://troisjs.github.io/guide/core/scene.html)

::window::

<LightExample class="h-300px"/>
