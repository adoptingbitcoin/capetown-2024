<template>
  <div class="w-full">
    <client-only>
      <div class="whitespace-nowrap">
        <vue-marquee-slider
            :id="'vue-marquee-slider' + Math.ceil(Math.random()*1000000)"
            :speed="20000"
            :space="20"
            :autoWidth="true"
            :repeat="200"
        >
          <slot></slot>
        </vue-marquee-slider>

        <vue-marquee-slider v-if="showSecond"
            :id="'vue-marquee-slider' + Math.ceil(Math.random()*1000000)"
            :speed="20000"
            :space="20"
            :autoWidth="true"
            :reverse="true"
            :repeat="200"
        >
          <slot></slot>
        </vue-marquee-slider>

      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    showSecond: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>