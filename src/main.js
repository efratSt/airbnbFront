import { createApp } from 'vue'
import { router } from './router.js'
import { store } from './store/store.js'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import VueCarousel from 'vue-carousel'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { stayService } from './services/stay.service.local'
import { orderService} from './services/order.service'

import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'
import {
    focusDirective,
    customOnDirective,
    clickOutsideDirective,
  } from './directives'
  
 
const app = createApp(rootCmp)
app.use(router)
app.use(store)
app.use(SetupCalendar, {})
app.use(VueCarousel)
app.use(ElementPlus)
app.directive('focus', focusDirective)
app.directive('custom-on', customOnDirective)
app.directive('click-outside', clickOutsideDirective)
// Use the components
app.component('Calendar', Calendar)
app.component('DatePicker', DatePicker)
app.mount('#app')

