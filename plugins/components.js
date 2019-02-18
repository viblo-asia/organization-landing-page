import Vue from 'vue'

import VueClickOutside from 'v-click-outside'
import SectionTitle from '~/components/Site/SectionTitle.vue'
import CreateNowButton from '~/components/Buttons/CreateNow.vue'

export default () => {
  Vue.use(VueClickOutside)
  Vue.component('SectionTitle', SectionTitle)
  Vue.component('CreateNowButton', CreateNowButton)
}
