import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default () => {
  library.add([
    faAngleDown,
    faAngleUp
  ])

  Vue.component('FaIcon', FontAwesomeIcon)
}
