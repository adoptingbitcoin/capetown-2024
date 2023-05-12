<template>
    <div class="">
        <GetInTouch/>

        <div class="component slim-component">

            <StraightBanner topImage="/images/section-heading--footer.svg"/>

            <div class="container flex-col md:flex-row flex w-full justify-between items-center [&>*]:m-5">
                <div class="uppercase">
                    <span>Adopting Bitcoin    ·    The Crowne Plaza </span> <br>
                    <span>89 Avenida Norte    ·    San Salvador</span>
                </div>

                <TicketPurchase class="mx-auto"/>

                <div class="">
                    <div class="flex">
                    <span class="uppercase mr-5">
                        A conference <br>
                        hosted by
                    </span>
                        <nuxt-link to="https://galoy.io" target="_blank">
                            <nuxt-img class="h-full w-auto object-contain" loading="lazy" src="/images/galoy_logo.png"
                                      alt=""/>
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <div class="container flex-col md:flex-row flex w-full justify-between items-center mt-20 [&>*]:m-5">
                <div class="uppercase w-fit">
                    <a target="_blank" href="https://t.me/AdoptingBTC">/telegram</a> &nbsp;
                    <a target="_blank" href="https://www.linkedin.com/company/76150672">/linkedin</a> &nbsp;
                    <a target="_blank" href="https://twitter.com/AdoptingBTC">/twitter</a> &nbsp;
                    <a target="_blank"
                       href="https://snort.social/p/npub1ad0ptuzte83alpkpqqctvewlaqj5zq23c83m82xw8apg4t6zlyns6xng2c">/nostr</a>
                    &nbsp;
                    <a target="_blank" href=" https://github.com/nuraelb/AdoptingBitcoin">/GitHub</a> &nbsp;
                    <br>
                    <a href="mailto:info@adoptingbitcoin.org">email if you need / info@adoptingbitcoin.org</a>

                </div>

                <br>

                <div class="uppercase text-left md:text-right w-fit">
                    <span>© adopting bitcoin 2023</span>
                    <br>
                    <span>DESIGNED BY PEAK SHIFT LTD.</span>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped lang="scss">

.component {
  background-color: #252525;

  font-size: 0.7rem;
}

.slim-component {
  @apply pt-0;
}

</style>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import GetInTouch from "~/components/index_page/GetInTouch.vue";

export default {
    components: {GetInTouch, FontAwesomeIcon}

}
</script>
