import PrimeVue from 'primevue/config'
import type { App } from 'vue'
import Aura from '@primeuix/themes/aura' // Import the Aura theme
import { Button, DataTable, Column } from 'primevue' // Import the Button component
export default function setupPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })

  app.component('Button', Button)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
}
