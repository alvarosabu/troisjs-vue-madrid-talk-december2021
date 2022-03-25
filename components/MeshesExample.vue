<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
/* import { SelectField } from '@asigloo/vue-dynamic-forms' */
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
  Circle,
  Cone,
  Cylinder,
  Dodecahedron,
  Icosahedron,
  Octahedron,
  Ring,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
  Tube,
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
    /* mesh: SelectField({
      label: 'Lamp Position Z',
      value: currentMesh.value,
      options: Object.keys(AVAILABLE_MESHES).map(mesh => ({
        label: mesh,
        value: mesh,
      })),
    }), */
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
      <Camera :position="{ z: 5 }" />
      <Scene background="#ffffff">
        <AmbientLight color="#808080" />
        <PointLight :position="{ y: 10, z: 10 }" />
        <Group>
          <Box :size="1">
            <BasicMaterial>
              <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
            </BasicMaterial>
          </Box>
          <Sphere :position="{ x: 3 }">
            <BasicMaterial>
              <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
            </BasicMaterial>
          </Sphere>
          <Ring :position="{ x: -3 }">
            <BasicMaterial>
              <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
            </BasicMaterial>
          </Ring>
        </Group>
      </Scene>
    </Renderer>
  </div>
</template>
