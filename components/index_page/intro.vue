<template>
    <div class="component">

        <AngledBanner topImage="/images/section-heading---adb-is-back.svg"
                      bottomImage="/images/section-heading---adb-is-back2.svg"/>

        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 mb-12">
                <div class=""></div>
                <div class="">
                    <client-only>
                        <p>
                            <FadeInText
                                    text="Unleash the Future: "/>
                            <FadeInText
                                    text="Bitcoin, Self-Sovereignty, and Parallel Institutions."/>
                        </p>
                        <br>
                        <p>
                            <FadeInText
                                    text="Join experts, advocates, and innovators from around the world at this extraordinary event in sunny Cape Town, South Africa."/>
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