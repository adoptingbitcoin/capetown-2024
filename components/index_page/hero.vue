<template>
    <div class="component relative min-h-screen">

        <div class="bg-clouds w-full top-0 left-0 h-full absolute bg-blend-lighten z-10"></div>
        <div class="bg-gradient absolute left-0 bottom-0 w-full h-1/2 z-0"></div>

        <div class="container relative pt-44 md:pt-32 h-full">

            <div class="relative h-full">
                <div class="grid grid-cols-6 h-full w-full left-0 top-0">
                    <nuxt-img src="/images/hero_img.png" class="h-auto w-full col-span-4 col-start-2" />
                </div>

                <div class="grid grid-cols-2 h-full w-full pt-12 md:py-28 absolute top-0 left-0">


                    <div class="flex flex-col justify-between h-full">
                        <div class="">
                            <h2 class="text-2xl lg:text-4xl">A Lightning Summit <br> in El Salvador</h2>
                        </div>

                        <div class="font-thin pt-52 z-30">
                            <a href="https://twitter.com/AdoptingBTC" class="hover:underline" target="_blank">/twitter</a>
                        </div>
                    </div>

                    <div class="flex flex-col justify-between h-full">
                        <div class="text-right">
                            <span>7 — 9 November 2023</span>
                            <br><br>
                            <span>
                            The Crowne Plaza <br>
                            89 Avenida Norte San Salvador
                        </span>
                        </div>

                        <div class="w-full">
                            <TicketPurchase class="float-right z-50 relative" />
                        </div>


                    </div>

                </div>

            </div>



        </div>




        <div class="hero-text invisible lg:visible ">
            <StraightBanner topImage="/images/section-heading--hero.svg" class="w-full"/>
        </div>


    </div>
</template>

<style scoped lang="scss">

.component{
    @apply py-0;
    background-color: #252525;
}

.hero-text {
  background-color: transparent;
    position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.bg-gradient{
    background: linear-gradient(180deg, #252525 0%, #000000 100%);
}

</style>

<script>
import CrazyText from "../crazy-text";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    components: {FontAwesomeIcon, CrazyText}

}
</script>
