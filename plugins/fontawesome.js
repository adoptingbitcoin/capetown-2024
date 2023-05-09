import { library, config } from '@fortawesome/fontawesome-svg-core'

import {faBolt, faGripLines} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faRulerHorizontal} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default defineNuxtPlugin(nuxtApp => {
    config.autoAddCss = false
    library.add(faBolt, faPlus, faMinus, faXmark, faGripLines)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
