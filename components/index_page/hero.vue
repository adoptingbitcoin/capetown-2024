<template>
    <div class="component relative h-screen">

        <div class="bg-clouds w-3/4 h/1/2 top-0 right-0 absolute"></div>

        <div class="grid grid-cols-3 h-full w-full absolute">
            <div class=""></div>
            <div class="hero_img">
                <div class="h-3/4">
                    <img src="~/assets/img/hero_img.png" class="h-full w-auto object-cover">
                </div>
            </div>
            <div class=""></div>
        </div>

        <div class="flex items-center h-full w-full absolute z-10 container mx-auto px-4">
            <div class="grid grid-cols-4 h-4/6">
                <div class=""></div>
                <div class="flex flex-col justify-between">
                    <div class="">
                        <h2 class="text-5xl">A Lightning Summit in El Salvador</h2>
                    </div>

                    <div class="font-thin ">
                        <a href="#">/twitter</a>
                        <br>
                        <a href="#">/instagram</a>
                    </div>
                </div>
                <div class=""></div>

                <div class="m-5">
                    <div class="text-right">
                        <span>16 — 18 November 2023</span>
                        <span>
                            The Crowne Plaza <br>
                            89 Avenida Norte San Salvador
                        </span>
                    </div>

                </div>
            </div>


        </div>


        <div class="scroll-text">
            <img src="~/assets/img/adb.png" alt="">
<!--            <scrolling-text :showSecond="false">-->
<!--                <div class="text-7xl inline-block bg-transparent">-->
<!--                    <crazy-text text="Adopting" element="h4" class="inline-block"/>-->
<!--                    <font-awesome-icon icon="fa-solid fa-bolt"/>-->
<!--                    <crazy-text text="Bitcoin" element="h4" class="inline-block"/>-->
<!--                </div>-->
<!--            </scrolling-text>-->
        </div>


    </div>
</template>

<style scoped lang="scss">

.component{
    @apply py-0;
}

.bg-clouds{
    background-image: url("~/assets/img/clouds-header.png");
}

.scroll-text {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
    img{
        width: 100%;
    }
}

.hero_img {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script>
import CrazyText from "../crazy-text";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    components: {FontAwesomeIcon, CrazyText}

}
</script>
