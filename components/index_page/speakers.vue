<template>
    <div id="speakers" class="component bg-clouds bg-blend-lighten">
        <div class="relative">
            <AngledBanner top-image="/images/section-heading--speakers.svg"/>
            <div class="container z-30">
                <table v-if="speakerData != null" class="table-auto w-full speaker-table">
                    <template v-for="[startLetter, items] in Object.entries(speakerData)">
                        <template v-for="[index, speaker] in items.entries()">
                            <tr :data-image="speaker.img"
                                class="hover:bg-adoptingYellow hover:text-black cursor-pointer" @click="goToSpeaker(speaker)"
                                @mouseleave="mouseleave" @mouseover="mouseover">
                                <td :class="{
                              'border-b' : index === 0,
                            }" class="hidden md:table-cell">
                                    <div class="">
                                        <span v-if="index === 0">{{ startLetter }}</span>
                                    </div>

                                </td>

                                <td class="border-b">
                                    <nuxt-link :to="speaker._path">{{ speaker.title }}</nuxt-link>
                                </td>
                                <td class="border-b">{{ speaker.company }}</td>

                            </tr>
                        </template>
                    </template>

                </table>
            </div>
        </div>


        <client-only>
            <MouseFollowImage v-bind:img="hoverImage" v-bind:visible="showHoverImage"/>
        </client-only>

    </div>
</template>

<style lang="scss" scoped>

.component {
  background-color: #252525;
  @apply pt-0;
}

.speaker-table {
  td {
    @apply py-5 px-5;
  }
}

</style>
<script setup>
import _groupBy from "lodash/groupBy";

const {data} = await useAsyncData('speakers' + process.env.CACHE_KEY, () => queryContent('/speakers').sort({title: 1}).find())
const speakerData = computed(() => {
    return _groupBy(data.value, data => data['title'][0]) //group by first letter of name
})
</script>

<script>

export default {
    data() {
        return {
            showHoverImage: false,
            hoverImage: ""
        }
    },
    methods: {
        goToSpeaker: function (speaker) {
            this.$router.push({path: speaker._path})
        },
        mouseleave: function () {
            this.showHoverImage = false
            this.hoverImage = null
        },
        mouseover: function (event) {
            let img = event.target.parentElement.getAttribute('data-image')
            this.showHoverImage = true
            if (img && '/images/speakers/' + img !== this.hoverImage) {
                this.hoverImage = '/images/speakers/' + img
            }
        }
    }
}
</script>