<template>
  <div class="component">
    <h1 class="">Adoping Bitcoin Hero</h1>

    <div class="">
      <scrolling-text :showSecond="false">
        <div class="text-9xl inline-block">
          <crazy-text text="Adopting" element="h4" class="inline-block" />

          <font-awesome-icon icon="fa-solid fa-bolt" />

          <crazy-text text="Bitcoin" element="h4" class="inline-block" />
        </div>

      </scrolling-text>
    </div>
  </div>
</template>

<style scoped>

.component {
  min-height: 100vh;
}

div {
  background-color: red;
  color: #fff;
}
</style>
<script>
import CrazyText from "../crazy-text";
export default {
  components: {CrazyText}
}
</script>