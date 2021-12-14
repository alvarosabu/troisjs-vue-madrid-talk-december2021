// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        porsche: '#d5001c',
        shading: '#0e1418e6',
      },
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        porsche: 'PorscheNext',
      },
    },
  },
}))
