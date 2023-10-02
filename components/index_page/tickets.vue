<template>
    <div class="component">

        <AngledBanner top-image="/images/section-heading--buy-ticket.svg"
                      bottom-image="/images/section-heading--buy-ticket.svg"/>

        <div class="container">

            <div class="grid lg:grid-cols-3 mb-12">
                <div class=""></div>
                <div class=""></div>
                <div class="">
                    <h5 class="font-bold text-3xl">Payable with bitcoin only.</h5>
                    <br>
                    <p>
                        Don't miss this incredible opportunity to be part of the Bitcoin revolution. Early bird
                        registration opens soon, so stay tuned for updates! Follow us on social media and visit our
                        website to stay informed.
                    </p>
                    <br><br>
                    <a class="uppercase" target="_blank" href="https://pretix.eu/machankura/ab24capetown/">Book Now</a>
                </div>
            </div>

        </div>

        <div class="tickets mt-5">
            <a href="https://pretix.eu/machankura/ab24capetown/" target="_blank">
                <TicketBanner top-image="/images/assets/tickets/tickets--november-row-1.svg"
                              bottom-image="/images/assets/tickets/tickets--november-row-2.svg" class="w-full"/>
            </a>

        </div>
    </div>
</template>

<style scoped>
.component {
    color: black;
    @apply py-0 bg-adoptingYellow;
}

img {
    @apply w-full h-auto my-3;
}
</style>
<script setup lang="ts">
import TicketBanner from "~/components/TicketBanner.vue";
</script>