<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'

import {
  Renderer,
  Scene,
  BasicMaterial,
  Texture,
  Sphere,
  Camera,
} from 'troisjs'

const renderer = ref(null)
const cameraPositions = reactive({ x: 40, y: null, z: null })

function onCameraChange() {
  const { x, y, z } = renderer.value.three.camera.position
  cameraPositions.x = Math.round(x)
  cameraPositions.y = Math.round(y)
  cameraPositions.z = Math.round(z)
}

onMounted(() => {
  const orbitCtrl = renderer.value.three.cameraCtrl
  onCameraChange()

  orbitCtrl.addEventListener('change', onCameraChange)
  /*   console.log(renderer.value) */
  /*  renderer.value.onMounted(() => {
    console.log('Init')
  }) */
  /* renderer?.value?.onBeforeRender(() => {
    cameraPositions.value = renderer?.value?.three.camera.position

    console.log(renderer?.value?.three.camera.position)
  }) */
})
</script>

<template>
  <div class="relative w-full h-300px">
    <div
      class="
        debug
        bg-white
        absolute
        z-10
        text-gray-700
        rounded
        p-4
        top-2
        right-4
      "
    >
      <pre>{{ cameraPositions }}</pre>
    </div>
    <Renderer ref="renderer" orbit-ctrl resize="true">
      <Camera :position="{ x: 40 }" />
      <Scene>
        <Sphere ref="sphere" :radius="10">
          <BasicMaterial>
            <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>
