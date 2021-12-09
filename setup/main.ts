import { defineAppSetup } from '@slidev/types'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms'

const VueDynamicForms = createDynamicForms()

export default defineAppSetup(({ app }) => {
  // Vue App
  app.use(VueDynamicForms)
})
