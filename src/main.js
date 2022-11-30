import { createApp } from 'vue'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import { router } from './router.js'
import { store } from './store/store.js'
import 'v-calendar/dist/style.css'
import VueCarousel from 'vue-carousel'
import { stayService } from './services/stay.service.local'

import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'

const app = createApp(rootCmp)
app.use(router)
app.use(store)
app.use(SetupCalendar, {})
app.use(VueCarousel)
// Use the components
app.component('Calendar', Calendar)
app.component('DatePicker', DatePicker)

app.mount('#app')
