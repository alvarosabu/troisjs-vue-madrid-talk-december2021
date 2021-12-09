<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import {
  Box,
  Camera,
  PointLight,
  Renderer,
  Scene,
  AmbientLight,
  BasicMaterial,
  Texture,
  Sphere,
} from 'troisjs'

const renderer = ref(null)
const box = ref(null)
const sphere = ref(null)

const boxRotation = ref(0.01)

const spherePosition = reactive({
  spherePosX: -10,
  spherePosY: -10,
  spherePosZ: -10,
})

onMounted(() => {
  renderer?.value?.onBeforeRender(() => {
    box.value.mesh.rotation.x += boxRotation.value
    sphere.value.mesh.rotation.y += 0.001
  })
})
</script>

<template>
  <div class="space relative w-full h-full">
    <Renderer orbit-ctrl ref="renderer" resize="true" alpha="0">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <AmbientLight />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <BasicMaterial>
            <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Box>
        <Sphere
          ref="sphere"
          :position="{
            x: spherePosition.spherePosX,
            y: spherePosition.spherePosY,
            z: spherePosition.spherePosZ,
          }"
          :radius="10"
        >
          <BasicMaterial>
            <Texture src="/splash-bg.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>
<style>
.space {
  background-image: url('/space-dust.png');
}
</style>
