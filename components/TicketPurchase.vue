<template>
    <a href="https://pretix.eu/galoy/ab23/" target="_blank" class="relative">
        <nuxt-img loading="" src="/images/assets/seal-book-base.svg" alt="" class="absolute animate-spin spin-slow z-10 w-fit h-auto" />
        <nuxt-img loading="" src="/images/assets/seal-book-arrow.svg" alt="" class="z-30 relative w-fit h-auto" />
    </a>
</template>

<script>
export default {
    name: "TicketPurchase"
}
</script>

<style scoped>
.spin-slow{
    animation: spin 30s linear infinite;
}
</style>