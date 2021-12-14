<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
import { SelectField } from '@asigloo/vue-dynamic-forms'
import { useFps } from '@vueuse/core'

import {
  Camera,
  AmbientLight,
  PointLight,
  Renderer,
  Scene,
  Texture,
  Box,
  Group,
  Ring,
  Sphere,
  BasicMaterial,
  LambertMaterial,
  PhongMaterial,
  PhysicalMaterial,
  StandardMaterial,
  // 'SubsurfaceMaterial,
  ToonMaterial,
} from 'troisjs'
import { Vector3 } from 'three'

const renderer = ref(null)
const lamp = ref(null)

const AVAILABLE_MESHES = {
  Box: { size: 1 },
  Circle: {},
  Cone: {},
  Cylinder: {},
  Dodecahedron: {},
  Icosahedron: {},
  Octahedron: {},
  Ring: {},
  Sphere: {},
  Tetrahedron: {},
  Torus: { tube: 0.2 },
  TorusKnot: { tube: 0.2 },
  Tube: {
    radius: 0.2,
    points: [
      new Vector3(-1, 1, 0),
      new Vector3(0, -1, 0),
      new Vector3(1, 1, 0),
    ],
  },
}

const AVAILABLE_MATERIALS = {
  BasicMaterial: {},
  LambertMaterial: {},
  PhongMaterial: {},
  PhysicalMaterial: {},
  StandardMaterial: {},
  // 'SubsurfaceMaterial': {},
  ToonMaterial: {},
}

const currentMesh = ref('Box')
const currentMaterial = ref('PhysicalMaterial')

const meshProps = computed(() => AVAILABLE_MESHES[currentMesh.value])
const matProps = computed(() => AVAILABLE_MATERIALS[currentMaterial.value])

const form = computed(() => ({
  id: 'basic-demo',
  fields: {
    mesh: SelectField({
      label: 'Lamp Position Z',
      value: currentMesh.value,
      options: Object.keys(AVAILABLE_MESHES).map(mesh => ({
        label: mesh,
        value: mesh,
      })),
    }),
  },
}))

function valueChanged({ mesh }) {
  currentMesh.value = mesh
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
      <p>FPS: {{ fps }}</p>
    </div>
    <Renderer
      antialias
      :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }"
      ref="renderer"
      resize
      shadow
    >
      <Camera :position="{ z: 5, x: -2 }" />
      <Scene background="#ffffff">
        <AmbientLight color="#808080" />
        <PointLight :position="{ y: 10, z: 10 }" />
        <Group>
          <Box :size="1">
            <PhongMaterial
              color="#5EDCAE"
              :props="{ transparent: true, opacity: 0.5 }"
            ></PhongMaterial>
          </Box>
          <Sphere :position="{ x: 3 }">
            <PhongMaterial color="#5EDCAE"></PhongMaterial>
          </Sphere>
          <Ring :position="{ x: -3 }">
            <PhongMaterial color="#5EDCAE"></PhongMaterial>
          </Ring>
        </Group>
      </Scene>
    </Renderer>
  </div>
</template>
