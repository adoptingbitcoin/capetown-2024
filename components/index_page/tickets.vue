<template>
  <div class="component py-36">
      <div class="container mx-auto mx-4">

          <div class="grid grid-cols-2">
              <div class=""></div>
              <div class="">
                  <h5 class="font-bold">Payable with bitcoin only.</h5>
                  <p class="text-sm">
                      Los salvadoreños que compren una entrada con descuento deberán mostrar su DUI en la puerta.
                  </p>

              </div>
          </div>

      </div>
      
      <div class="tickets my-5">
          <img src="~/assets/img/tickets-row.png" alt="">
          <img src="~/assets/img/tickets-row-2.png" alt="">
      </div>
  </div>
</template>

<style scoped>
.component {
  background-color: #EEDB5F;
  color: black;
}
img {
  @apply w-full h-auto my-3;
}
</style>