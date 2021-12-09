<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
import { NumberField } from '@asigloo/vue-dynamic-forms'
import { useFps } from '@vueuse/core'

import {
  Camera,
  PointLight,
  Renderer,
  Scene,
  PhysicalMaterial,
  Box,
  Plane,
} from 'troisjs'

const renderer = ref(null)
const lamp = ref(null)

const lampState = reactive({
  lampPosY: 50,
  lampPosZ: 50,
  intensity: 1,
})

const form = computed(() => ({
  id: 'basic-demo',
  fields: {
    lampPosZ: NumberField({
      label: 'Lamp Position Z',
      value: 50,
    }),
    lampPosY: NumberField({
      label: 'Lamp Position Y',
      value: 50,
    }),
    intensity: NumberField({
      label: 'Intensity',
      value: 1,
      step: 0.1,
    }),
  },
}))

function valueChanged(values) {
  Object.assign(lampState, values)
}

const fps = useFps()
</script>
<template>
  <div class="relative w-full h-full">
    <div
      class="
        bg-white
        p-4
        text-sm
        px-8
        rounded
        w-1/3
        shadow-lg
        fixed
        right-2
        bottom-0
        text-gray-800
      "
    >
      <DynamicForm :form="form" @change="valueChanged" />
      <p>FPS: {{ fps }}</p>
    </div>
    <Renderer orbit-ctrl ref="renderer" resize="true" :shadow="true">
      <Camera :position="{ z: 100 }" />
      <Scene>
        <PointLight
          ref="lamp"
          color="#5EDCAE"
          :intensity="lampState.intensity"
          :position="{ y: lampState.lampPosY, z: lampState.lampPosZ }"
          cast-shadow
          :shadow-map-size="{ width: 512, height: 512 }"
        />
        <Box :size="10" :rotation="{ x: 1, z: 1 }" cast-shadow>
          <PhysicalMaterial />
        </Box>
        <Plane :width="100" :height="100" :position="{ z: -20 }" receive-shadow>
          <PhysicalMaterial color="#5EDCAE" />
        </Plane>
      </Scene>
    </Renderer>
  </div>
</template>
