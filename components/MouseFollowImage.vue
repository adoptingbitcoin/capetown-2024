<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "MouseFollowImage",
    props: [
        'img',
        'visible'
    ],
    data() {
        return {
            page: {
                left : 0,
                top: 0
            },
        }
    },
    mounted() {
        const onMouseMove = (e) =>{
            this.page.left = e.pageX;
            this.page.top = e.pageY;
        }
        document.addEventListener('mousemove', onMouseMove);
    },
})


</script>

<template>
    <div :style="{ left: page.left + 'px', top: page.top + 'px' }" class="absolute z-20 pointer-events-none mouseimage">
        <nuxt-img v-if="img" :src="img" class="w-36 h-auto" />
    </div>
</template>

<style scoped>
.mouseimage{
    transition: all 0.1s linear;
}
</style>