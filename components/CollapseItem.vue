<template>
<div class="">

    <div class="cursor-pointer w-full  p-5 hover:text-black flex justify-between hover:bg-adoptingYellow" @click="isOpen = !isOpen">
        <span>{{ title }}</span>
        <div class="text-end">
            <client-only>
                <div v-if="!isOpen"><font-awesome-icon :icon="['fa', 'plus']" /></div>
                <div v-if="isOpen"><font-awesome-icon :icon="['fa', 'minus']" /></div>
            </client-only>
        </div>
    </div>

    <Collapse :when="isOpen" class="pb-36 vue-collapse">
        <div class="p-5">
            <slot />
        </div>
    </Collapse>

    <div class="w-full border-b"></div>

</div>
</template>



<script setup lang="ts">

import {Collapse} from "vue-collapsed";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

let isOpen = ref(false)

const props = defineProps({
    title: String
})


</script>

<style scoped>

</style>