<template>
  <div class="component">

      <AngledBanner top-image="/images/section-heading--buy-ticket.svg" bottom-image="/images/section-heading--buy-ticket.svg" />

      <div class="container">

          <div class="grid lg:grid-cols-3 mb-12">
              <div class=""></div>
              <div class=""></div>
              <div class="">
                  <h5 class="font-bold text-3xl">Payable with bitcoin only.</h5>
                  <br>
                  <p lang="es">
                      Los salvadoreños que compren una entrada con descuento deberán mostrar su DUI en la puerta.
                  </p>
                  <br><br>
                  <a class="uppercase" target="_blank" href="https://pretix.eu/galoy/ab23/">Book Now</a>
              </div>
          </div>

      </div>
      
      <div class="tickets mt-5">
          <a href="https://pretix.eu/galoy/ab23/" target="_blank">
              <TicketBanner top-image="/images/assets/tickets/tickets-row-1_a.svg" bottom-image="/images/assets/tickets/tickets-row-2_a.svg" class="w-full"/>
          </a>

      </div>
  </div>
</template>

<style scoped>
.component {
  background-color: #EEDB5F;
  color: black;
    @apply py-0;
}
img {
  @apply w-full h-auto my-3;
}
</style>
<script setup lang="ts">
import TicketBanner from "~/components/TicketBanner.vue";
</script>