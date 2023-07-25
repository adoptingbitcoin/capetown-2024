<template>
    <div class="component py-36">
        <div class="container mx-auto px-4 relative">

            <div class="grid md:grid-cols-2 mb-5">
                <div class="mx-auto md:ml-auto md:mr-0">
                    <nuxt-picture loading="lazy" src="/images/call-for-sponsor.png" alt=""/>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 md:absolute w-full h-full top-0 left-0">
                <div class=""></div>
                <div class="flex items-center">
                    <div class="container">
                        <p class="h-fit text-justify lg:indent-28">
                            Become a sponsor and make an impact at Adopting Bitcoin. Submit your contact information and
                            we'll get in touch with you.
                        </p>
                        <br>
                        <a href="https://forms.gle/dHF6aaaToqo6Cr2x5" target="_blank"
                           class="hover:underline float-right">REACH OUT</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.component {
    background-color: #1F1F1F;
}

p {
    @apply text-adoptingYellow;
}
</style>
<script setup lang="ts">
</script>