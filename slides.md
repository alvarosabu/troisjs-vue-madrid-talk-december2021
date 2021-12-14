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

<div class="w-full grid grid-cols-2">
  <div>
   <img class="shadow-lg transform rotate-2" src="/porsche-collage.png" />
  </div>
  <div class="flex flex-col items-end">
   <h1 class="mb-24">Porsche <span>Digital</span></h1>
   <a class="btn tada" href="https://bcn-porsche-digital.softgarden.io/de/vacancies">Únete a nosotros</a>
  </div>
  
</div>

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
- **Meshes** (Geometría)
- **Materiales** 🪵
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

<p class="bg-yellow-200 text-yellow-600 p-4 text-sm rounded">⚠️ No utilices este método (plugin) si tu proyecto requiere tree shaking y soporte para Typescript.</p>

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
media: /frames-per-second-diagram.png
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Render loop
    
Similar al loop de los videojuegos, TroisJS lanza un `requestAnimationFrame` loop para renderizar la escena frame by frame, corriendo hasta **60 frames por segundo**. Esto significa que tu codigo se ejecuta 60 veces cada segundo.

<p class="bg-yellow-200 text-yellow-600 p-4 text-sm rounded">⚠️ Trata de no usar reactividad para actualizar los componentes de TroisJS (puede afectar performance), se recomienda actualizar directamente los objetos de ThreeJS</p>

Documentación completa en este [link](https://troisjs.github.io/guide/core/raf.html)

---
layout: text-window
media: /frames-per-second-diagram.png
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
media: /frames-per-second-diagram.png
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
eventLogo: https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg
eventUrl: https://www.meetup.com/VueJS-Madrid/
twitter: '@alvaro_code'
twitterUrl: https://twitter.com/alvaro_code
---

# Features

Luces, Materiales, Formas, Modelos


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

Documentación completa en este [link](https://troisjs.github.io/guide/lights/)

::window::

<LightExample class="h-250px"/>

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Lights 💡

- `AmbientLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/AmbientLight))
- `DirectionalLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/DirectionalLight.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight))
- `HemisphereLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/HemisphereLight.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/HemisphereLight))
- `PointLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/PointLight.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/PointLight))
- `RectAreaLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/RectAreaLight.ts), [threejs doc](https://threejs.org/docs/#api/en/lights/RectAreaLight))
- `SpotLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/SpotLight))


Documentación completa en este [link](https://troisjs.github.io/guide/lights/)

::window::


| Name         | Description     | Type    | Default |
| ------------ | --------------- | ------- | ------- |
| `castShadow` | Casting shadow	 | Boolean | `false` |
| `color` | Light Color	 | String, Number | `#ffffff` |
| `intensity` | Light Intensity	 | Number | `1` |
| `position` | Light position	 | Object | `{ x: 0, y: 0, z: 0 }` |
| `shadowMapSize` | Shadow map size	 | Object | `{ width: 512, height: 512 }` |

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Shadows 👻

Para habilitar el uso del sombreado se tienen que hacer los siguientes pasos

1. Añadir `shadow` al componente `Renderer`,
2. Añadir `cast-shadow` al componente de iluminación,
3. Añadir `cast-shadow` / `recieve-shadow` en la **Malla**

```ts
<Renderer shadow>
  <Camera :position="{ z: 100 }" />
  <Scene>
    <PointLight :position="{ y: 50, z: 50 }" cast-shadow :shadow-map-size="{ width: 512, height: 512 }" />
    <Box :size="10" :rotation="{ x: 1, z: 1 }" cast-shadow>
      <LambertMaterial />
    </Box>
    <Plane :width="100" :height="100" :position="{ z: -20 }" receive-shadow>
      <LambertMaterial />
    </Plane>
  </Scene>
</Renderer>
```

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Meshes

Meshes (Mallas) es una colección de vértices, aristas (edges) y caras (faces) que define la forma de un objeto poliédrico.
 
```ts
<Scene>
  <Cone
    :position="{ x: 0, y: 0, z: 0 }"
    :rotation="{ x: 0, y: 0, z: 0 }"
    :scale="{ x: 1, y: 1, z: 1 }"
    :cast-shadow="false"
    :receive-shadow="false"
  >
    <BasicMaterial />
  </Cone>
</Scene>
```

Documentación completa en este [link](https://troisjs.github.io/guide/meshes/)

::window::

<MeshesExample class="h-250px"/>

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Meshes 

- `Box` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Box.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/BoxBufferGeometry))
- `Circle` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Circle.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/CircleBufferGeometry))
- `Cone` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Cone.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/ConeBufferGeometry))
- `Cylinder` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Cylinder.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/CylinderBufferGeometry))
- `Plane` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Plane.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/PlaneBufferGeometry))
- `Ring` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Ring.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/RingBufferGeometry))
- `Sphere` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Sphere.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/SphereBufferGeometry))
- `Torus` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Torus.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TorusBufferGeometry))
- `Tube` ([source](https://github.com/troisjs/trois/blob/master/src/meshes/Tube.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TubeBufferGeometry))

Documentación completa en este [link](https://troisjs.github.io/guide/lights/)

::window::


| Name         | Description     | Type    | Default |
| ------------ | --------------- | ------- | ------- |
| `position` | Position	 | Object | `{ x: 0, y: 0, z: 0 }` |
| `rotation` | Rotation	 | Object| `{ x: 0, y: 0, z: 0 }` |
| `scale` | Scale	 | Object | `{ x: 1, y: 1, z: 1 }` |
| `castShadow` | Cast shadow	 | Boolean | `false` |
| `receiveShadow` | Receive shadow	 | Boolean | `false` |

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

<iframe class="w-full h-400px roundex overflow-hidden" src="https://troisjs.github.io/little-planet/" />

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Materiales

Esencialmente, un material es el conjunto propiedades visuales asignadas a un objeto. Controla como el objeto es percibido en el renderizado.

 
```ts
<Box>
  <PhongMaterial color="#ffffff" 
  :props="{ transparent: true, opacity: 0.5 }" />
</Box>
```

Documentación completa en este [link](https://troisjs.github.io/guide/materials/)

::window::

<MaterialsExample class="h-250px"/>

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Materiales 

- `BasicMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial))
- `LambertMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial))
- `MatcapMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/MatcapMaterial.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial))
- `PhongMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial))
- `PhysicalMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial))
- `ShaderMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/ShaderMaterial.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/ShaderMaterial))
- `StandardMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial))
- `SubSurfaceMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/SubSurfaceMaterial.ts), [threejs example](https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_subsurface_scattering.html))
- `ToonMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Material.ts), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial))


Documentación completa en este [link](https://troisjs.github.io/guide/lights/)

::window::


| Name         | Description     | Type    | Default |
| ------------ | --------------- | ------- | ------- |
| `color` | Color	 | String, Number | `#ffffff` |
| `props` | Properties to apply to material, these properties will be watched	 | Object| `{}` |


---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Texturas

Son imágenes 2D proyectadas encima de una malla.
 
```ts
<Box ref="box">
  <BasicMaterial>
    <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
  </BasicMaterial>
</Box>
```

Documentación completa en este [link](https://troisjs.github.io/guide/materials/)

::window::

<PlanetExample class="h-250px"/>

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Modelos

TroisJS contiene loaders para modelos `.gltf/.glb` and `.fbx` files.

```ts
<GltfModel
    src="/path/to/your/model.gltf"
    @load="onReady"
    @progress="onProgress"
    @error="onError"
/>

<!-- FBX Model has the same props and events but loads FBX files -->
<FbxModel
    src="/path/to/your/model.fbx"
    @load="onReady"
    @progress="onProgress"
    @error="onError"
/>
```

Documentación completa en este [link](https://troisjs.github.io/guide/materials/)

::window::

<GltfModelExample class="h-250px"/>

---
layout: text-window
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Modelos

Ocasionalmente, los modelos tendrán la metalidad de sus materiales establecida en 0 y no se verán afectados por `AmbientLights`. Para solucionarlo (consulte [aquí](https://discourse.threejs.org/t/ambient-light-and-gltf-models-not-working-results-in-black-model/7428/5) para obtener una explicación):

Para remover el problema solo hay que agregar lo siguiente en el callback `OnReady`.

```ts
model.traverse(o => {
  if (o.isMesh && props.corrected) {
    // handle both multiple and single materials
    const asArray = Array.isArray(o.material) ? o.material : [o.material]
    // 0 works for matte materials - change as needed
    asArray.forEach(mat => (mat.metalness = 0))
  }
})
```

Documentación completa en este [link](https://troisjs.github.io/guide/materials/)

::window::

<GltfModelExample corrected class="h-250px"/>

---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# ¿Estáis listos para ir full 3D?

TroisJS

- Vue3
- La rápidez de Vite
- El poder de renderizado de ThreeJS
- Sencillo
- Divertido
  
---
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# ¿Qué sigue?

Practicar y jugar con la libreria TroisJS.

- [InstancedMesh](https://troisjs.github.io/guide/meshes/instanced.html) (Generación dinámica de objetos)
- Interactividad con [Eventos](https://troisjs.github.io/guide/meshes/events.html).
- [Postprocessing](https://troisjs.github.io/guide/postprocessing/)
- [VR-Button](https://troisjs.github.io/guide/extras/vrbutton.html)

---
layout: new-section
eventLogo: 'https://secure.meetupstatic.com/photos/event/4/1/8/a/600_458596778.jpeg'
eventUrl: 'https://www.meetup.com/VueJS-Madrid/'
twitter: '@alvaro_code'
twitterUrl: 'https://twitter.com/alvaro_code'
---

# Gracias totales 🙏🏻
