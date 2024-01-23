<template>

    <div class="">
        <div class="nav absolute w-full top-0 left-0 h-fit py-10" :class="{'menuOpen': menuOpen}">
            <div class="container flex justify-between">
                <nuxt-link to="/" class="">
                    <nuxt-img class="logo" src="/images/logo.svg"/>
                </nuxt-link>

                <div class="flex items-center">
                    <nuxt-link to="https://pretalx.com/adopting-bitcoin-cape-town-2024/cfp" class="underline mb-2 mr-12 hidden md:block"
                               target="_blank">Call for participation
                    </nuxt-link>
                    <a v-on:click="menuOpen = !menuOpen" class="h-18 w-18 cursor-pointer">
                        <div class="m-auto" :class="menuOpen ? 'hidden' : 'visible'">
                            <span class="material-symbols-outlined text-5xl">drag_handle</span>
                        </div>

                        <div class="m-auto" :class="menuOpen ? 'visible' : 'hidden'">
                            <span class="material-symbols-outlined text-5xl">close</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-full md:hidden flex justify-between">
                <div class="mx-auto mt-5">
                    <nuxt-link to="https://pretalx.com/adopting-bitcoin-cape-town-2024/schedule/" class="underline" target="_blank">Conference Schedule
                    </nuxt-link>
                </div>

            </div>

        </div>

        <div class="fixed w-full h-full top-0 left-0 nav-overlay" v-if="menuOpen">
            <div class="bg-clouds w-full top-0 left-0 h-full absolute bg-blend-lighten z-10"></div>
            <div class="container mt-44 md:mt-52">

                <div class="flex flex-col menu-links text-right">
                    <nuxt-link to="/#venue" v-on:click="menuOpen = false">venue</nuxt-link>
                    <nuxt-link to="/#speakers" v-on:click="menuOpen = false">speakers</nuxt-link>
                    <nuxt-link to="/#ticket" v-on:click="menuOpen = false">ticket</nuxt-link>
                    <nuxt-link to="/#sponsors" v-on:click="menuOpen = false">sponsors</nuxt-link>
                    <nuxt-link to="/#partners" v-on:click="menuOpen = false">partners</nuxt-link>
                    <nuxt-link to="/#team" v-on:click="menuOpen = false">team</nuxt-link>

                    
                    <nuxt-link to="https://pretalx.com/adopting-bitcoin-cape-town-2024/schedule/" target="_blank">Conference Schedule</nuxt-link>
                    <nuxt-link to="/faq">FAQ</nuxt-link>
                </div>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            menuOpen: false
        }
    },
}
</script>

<style scoped lang="scss">
.nav {
  z-index: 9999;
}

.menuOpen {
  @apply fixed;
}

.logo {
  @apply z-10 h-16 w-auto;
}

.nav-overlay {
  background-color: #252525;
  z-index: 9998;
}

.menu-links {

  a {
    z-index: 99999;
    @apply text-lg my-1 md:my-0 md:text-4xl hover:underline text-white;
  }
}
</style>
