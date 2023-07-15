<template>
    <div class="component py-36" id="team">

        <StraightBanner topImage="/images/section-heading--people.svg"/>

        <div class="container pt-5">
            <div v-for="team in teamData" class="">
                <div class="cursor-pointer w-full border-b py-5 grid grid-cols-2 md:grid-cols-4 px-5 hover:text-black hover:bg-adoptingYellow"
                     @click="uncollapsed[team.name] = !uncollapsed[team.name]">
                    <a>{{ team.name }}</a>
                    <span class="opacity-60 hidden md:block">{{ team.items.length }}</span>
                    <div class="hidden md:block"></div>
                    <div class="text-end px-5">
                        <client-only>
                            <div v-if="!team.isOpen">
                                <font-awesome-icon :icon="['fa', 'plus']"/>
                            </div>
                            <div v-if="team.isOpen">
                                <font-awesome-icon :icon="['fa', 'minus']"/>
                            </div>
                        </client-only>
                    </div>

                </div>

                <Collapse :when="uncollapsed[team.name]" class="pb-36 vue-collapse">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-12 pb-5 mt-12 ">
                        <nuxt-link v-for="member in team.items" :to="member.url" target="_blank">
                            <nuxt-img :src="'/images/team/' + member.img" class="max-w-full h-auto grayscale mb-3"/>
                            <span>{{ member.title }}</span> <br>
                            <span class="opacity-60">{{ member.function }}</span>
                        </nuxt-link>
                    </div>

                </Collapse>
            </div>

        </div>

    </div>
</template>

<style scoped>
.component {
    background-color: #252525;
    @apply py-0;
}
</style>
<script setup>
import _groupBy from 'lodash/groupBy'
import {Collapse} from 'vue-collapsed'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

let uncollapsed = ref({})

const {data} = await useAsyncData('team' + process.env.CACHE_KEY, () => queryContent('/team').find())

const teamData = computed(() => {
    let teamData = _groupBy(data.value, data => data['team'])
    let retArr = {}
    for (const [key, value] of Object.entries(teamData)) {
        retArr[key] = {}
        retArr[key].name = key
        retArr[key].items = value
        retArr[key].isOpen = false

        uncollapsed[key] = false
    }
    return retArr
})

</script>