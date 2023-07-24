<template>
    <div class="component relative overflow-x-hidden">
        <!--      <div class="location-banner">-->

        <!--          <div class="absolute left-0 w-full -rotate-5 z-30">-->
        <!--              <nuxt-img loading="lazy" src="/images/join-banner.png" class="w-full z-50 relative" alt="The Crowne Plaza San Salvador" />-->
        <!--          </div>-->
        <!--          <div class="absolute left-0 w-full -rotate-5 z-10">-->
        <!--              <nuxt-img loading="lazy" src="/images/join-banner.png" class="w-full invisible" alt="The Crowne Plaza San Salvador" />-->
        <!--              <div class="w-[200%] flex -ml-96">-->
        <!--                  <nuxt-img loading="lazy" src="/images/join-banner.png" class="w-1/2 pr-[75px]" alt="The Crowne Plaza San Salvador" />-->
        <!--                  <nuxt-img loading="lazy" src="/images/join-banner.png" class="w-1/2" alt="The Crowne Plaza San Salvador" />-->
        <!--              </div>-->
        <!--          </div>-->
        <!--      </div>-->

        <div class="absolute top-0 left-0 h-full z-10">
            <AngledBanner topImage="/images/section-heading--join-us.svg"
                          bottomImage="/images/section-heading--join-us.svg"/>
        </div>

        <div class="bg-clouds w-full top-0 left-0 h-full absolute bg-blend-lighten z-10"></div>

        <div class="bg-gradient absolute left-0 bottom-0 w-full h-1/2 z-0"></div>

        <div class="container mx-auto px-4 z-20 relative mt-32">
            <div class="grid md:grid-cols-2">
                <div class="py-5">
                    <nuxt-img loading="lazy" src="/images/cticc2.png"
                              class="max-w-full max-h-80vh w-1/2 z-20 mx-auto relative"
                              alt=""/>
                </div>
                <div class="px-4 flex flex-col-reverse">
                    <div class="pb-20 xl:mt-14">
                        <h5 class="text-4xl py-3">In the Heart of Cape Town</h5>
                        <p class="font-thin">
                            Join us for the Adopting Bitcoin 2024 Cape Town, held at the Ballroom West, CTICC 1.
                            This vibrant venue is just a stone's throw away from major attractions like Table Mountain,
                            and offers access to awesome hikes on Lion's Head and world-renowned shopping at the V&A Waterfront. 
                            Additionally, it's conveniently situated only a 20-minute drive from Cape Town International Airport.
                        </p>
                        <br><br>
                        <a href="https://www.cticc.co.za/maps-directions/"
                           target="_blank" class="hover:underline uppercase">
                            Get There
                        </a>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.location-banner img {
    @apply h-28 w-auto;
}

.max-h-80vh {
    max-height: 80vh;
}

.component {
    background-color: #252525;
}

.bg-gradient {
    background: linear-gradient(180deg, #252525 0%, #000000 100%);
}

</style>