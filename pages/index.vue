<template>
    <div>
        <Head>
            <Title>Adopting Bitcoin 2024</Title>
        </Head>
        <navbar/>
        <hero class="pt-52"/>
        <intro/>
        <!--        <location_carousel/>-->
        <location id="venue"/>

        <!--        <schedule/>-->
        <img alt="" class="w-full h-auto" loading="lazy" src="/images/AB24.gif"/>
        <speakers/>
        <tickets id="ticket"/>
        <sponsors/>
        <sponsors_call/>
        <people/>
        <footer_component/>

    </div>
</template>

<script>

import Location_carousel from "../components/index_page/location_carousel";
import Location from "../components/index_page/location";
import Hero from "../components/index_page/hero";
import Intro from "../components/index_page/intro";
import Schedule from "../components/index_page/schedule";
import Speakers from "../components/index_page/speakers";
import Sponsors_call from "../components/index_page/sponsors_call";
import Tickets from "../components/index_page/tickets";
import Sponsors from "~/components/index_page/sponsors.vue";
import People from "~/components/index_page/people.vue";
import Navbar from "~/components/index_page/navbar.vue";
import Footer_component from "~/components/footer_component.vue";

export default {
    components: {
        Footer_component,
        Navbar,
        People,
        Sponsors, Tickets, Sponsors_call, Speakers, Schedule, Intro, Hero, Location, Location_carousel
    }
}
</script>
