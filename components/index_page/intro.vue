<template>
    <div class="component">

        <AngledBanner topImage="/images/section-heading--adb-is-back.svg"
                      bottomImage="/images/section-heading--adb-is-back.svg"/>

        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 mb-12">
                <div class=""></div>
                <div class="">
                    <client-only>
                        <p>
                            <FadeInText
                                    text="Unleashing the Power of Bitcoin:"/>
                            <FadeInText
                                    text="Adoption, Self-Sovereignty, and Lightning Revolution "/>
                        </p>
                        <br>
                        <p>
                            <FadeInText
                                    text="Join us for an extraordinary event in the breathtaking city of Cape Town, South Africa, where visionaries and trailblazers from around the globe will converge for the Adopting Bitcoin Cape Town Conference 2024!"/>
                        </p>
                    </client-only>
                </div>
            </div>


        </div>
        <div class="hidden md:block">
            <BlogSlider slides-per-view="2.5"/>
        </div>
        <div class="md:hidden">
            <BlogSlider slides-per-view="1.5"/>
        </div>

    </div>
</template>
<script setup lang="ts">
</script>