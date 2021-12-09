<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useFps } from '@vueuse/core'

import {
  Camera,
  PointLight,
  Renderer,
  Scene,
  AmbientLight,
  BasicMaterial,
  Texture,
  Sphere,
} from 'troisjs'
import { NumberField } from '@asigloo/vue-dynamic-forms'

const sphere = ref(null)

const spherePosition = reactive({
  spherePosX: 2,
  spherePosY: 2,
  spherePosZ: 2,
})

const form = computed(() => ({
  id: 'basic-demo',
  fields: {
    spherePosX: NumberField({
      label: 'Sphere Position X',
      value: 2,
    }),
    spherePosY: NumberField({
      label: 'Sphere Position Y',
      value: 2,
    }),
    spherePosZ: NumberField({
      label: 'Sphere Position Z',
      value: 2,
    }),
  },
}))

function valueChanged(values) {
  Object.assign(spherePosition, values)
}

const fps = useFps()
</script>
<template>
  <div class="space relative w-full h-full">
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
    <Renderer orbit-ctrl ref="renderer" resize="true">
      <Camera :position="{ z: 20 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <AmbientLight />
        <Sphere
          ref="sphere"
          :position="{
            x: spherePosition.spherePosX,
            y: spherePosition.spherePosY,
            z: spherePosition.spherePosZ,
          }"
          :radius="4"
        >
          <BasicMaterial>
            <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>

<style lang="scss">
.form-group {
  @apply flex flex-col mb-2;
}

.form-label {
  @apply w-full mb-2 text-xs font-bold;
}

.form-control {
  @apply border-2 border-gray-300 rounded-lg px-2 py-1 text-xs;

  &:focus {
    @apply outline-none border-green-400;
  }

  &--success {
    @apply border-green-400 bg-green-50;
  }

  &--error {
    @apply border-red-400 bg-red-50;
  }
}

.form-hint {
  @apply text-sm;
}

.form-error {
  @apply text-red-500;
}

.checkbox-control,
.radio-control {
  @apply mr-4;
}

.checkbox-label,
.radio-label {
  @apply select-none cursor-pointer text-sm;
}

.checkbox-control:disabled ~ .checkbox-label,
.radio-control:disabled ~ .radio-label {
  @apply opacity-50 text-gray-500 cursor-not-allowed pointer-events-none;
}
</style>
