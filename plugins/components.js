import Vue from 'vue'

import VueClickOutside from 'v-click-outside'
import SectionTitle from '~/components/Site/SectionTitle.vue'

export default () => {
  Vue.use(VueClickOutside)
  Vue.component('SectionTitle', SectionTitle)
}
