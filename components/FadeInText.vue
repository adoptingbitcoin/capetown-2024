<template>
    <div class="fade-in-text">
        <p>
            <span v-for="block in getText()" data-aos="fade" :data-aos-offset="delay" :data-aos-duration="duration">
                {{ block }}&#8205;
            </span>
        </p>
    </div>
</template>

<script>
import {split} from "lodash/string";

export default {

    methods: {
        split,
        getText: function() {
            return this.text.split(' ')
        }
    },

    props: {
        delay: {
            type: Number,
            default: 250
        },
        duration: {
            type: Number,
            default: 1000
        },
        text: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
</style>