<script setup lang="ts">
import { ref } from 'vue'
import {
  Camera,
  PointLight,
  Renderer,
  Scene,
  AmbientLight,
  GltfModel,
} from 'troisjs'

const props = defineProps({
  corrected: { type: Boolean, default: false },
})

const model = ref(null)

function onReady(model) {
  console.log('Ready', model)
  model.traverse(o => {
    if (o.isMesh && props.corrected) {
      // handle both multiple and single materials
      const asArray = Array.isArray(o.material) ? o.material : [o.material]
      // 0 works for matte materials - change as needed
      asArray.forEach(mat => (mat.metalness = 0))
    }
  })
}
</script>

<template>
  <div class="space relative w-full h-full">
    <Renderer orbit-ctrl ref="renderer" resize="true" alpha="0">
      <Camera :position="{ z: 20 }" />
      <Scene background="#5EDCAE">
        <AmbientLight />
        <GltfModel
          :position="{ y: -3, z: 10 }"
          ref="model"
          src="/models/crash-bandicoot/crash-bandicoot.gltf"
          @load="onReady"
        />
      </Scene>
    </Renderer>
  </div>
</template>
