<template>
  <div>
    <span v-for="(letter, index) in text" :key="index" class="relative">
      <span :style="{ color: fistColor }">{{ letter }}</span>
      <span :style="{ color: secondColor, top: randomOffset(), left: randomOffset() }" class="overlay">{{ letter }}</span>
      <span :style="{ color: thirdColor, top: randomOffset(), left: randomOffset() }" class="overlay">{{ letter }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    randomOffset() {
      return Math.floor(Math.random() * 6) - 3 + 'px';
    }
  },
  data() {
    return {
      fistColor: '#F34D4D',
      secondColor: '#3F69FF',
      thirdColor: '#EEDB5F'
    };
  }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.overlay:nth-child(2) {
  z-index: 2;
}
.overlay:nth-child(3) {
  z-index: 3;
}
</style>
