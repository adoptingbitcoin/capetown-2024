import { library, config } from '@fortawesome/fontawesome-svg-core'

import {faBolt} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin(nuxtApp => {
    config.autoAddCss = false
    library.add(faBolt)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
