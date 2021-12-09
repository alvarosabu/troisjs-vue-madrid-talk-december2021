<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useFps } from '@vueuse/core'

import { Renderer, Scene, BasicMaterial, Texture, Box, Camera } from 'troisjs'

const renderer = ref(null)
const box = ref(null)
const fps = useFps()

onMounted(() => {
  renderer?.value?.onBeforeRender(() => {
    box.value.mesh.rotation.x += 0.01
  })
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
      <pre>FPS {{ fps }}</pre>
    </div>
    <Renderer ref="renderer" orbit-ctrl resize="true">
      <Camera :position="{ x: 2, z: 2, y: 2 }" />
      <Scene>
        <Box ref="box">
          <BasicMaterial>
            <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Box>
      </Scene>
    </Renderer>
  </div>
</template>
