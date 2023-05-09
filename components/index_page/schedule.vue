<template>
  <div class="component">

      <nuxt-img loading="lazy" src="/images/schedule-banner.png" class="banner-image" alt="" />
      <client-only>
      <div class="container pt-36">
          <table class="w-full schedule-table">
              <template v-for="scheduleItem in schedule">
                  <tr>
                      <td class="border-b">{{ scheduleItem.title }}</td>
                      <td class="border-b">{{ scheduleItem.date }}</td>
                      <td class="border-b"></td>
                      <td class="border-b">{{ scheduleItem.items[0] }}</td>
                  </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td class="border-b">{{ scheduleItem.location }}</td>
                      <td class="border-b">{{ scheduleItem.items[1] }}</td>
                  </tr>
                  <tr v-for="item in scheduleItem.items.slice(2)">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="border-b">{{ item }}</td>
                  </tr>
                  <tr class="my-5"><td></td></tr>
              </template>

          </table>



      </div>
      </client-only>

  </div>
</template>
<style scoped lang="scss">
.schedule-table {
    td {
        @apply py-5;
    }
}
</style>
<script setup lang="ts">
const schedule = [
    {
        "title": "Day One",
        "date": "Nov 16",
        "location": "Hotel Crowne Plaza, 89 Avenida Norte, San Salvador, SV",
        "items": [
          "8:00 am — Registration",
          "8:45 am — Opening",
          "6:00 pm — Bitfinex Cocktail Party",
          "10:00 pm — End"
        ]
    },
    {
        "title": "Day Two",
        "date": "Nov 17",
        "location": "Hotel Crowne Plaza, 89 Avenida Norte, San Salvador, SV",
        "items": [
          "8:00 am — Registration",
          "8:45 am — Opening",
          "6:00 pm — Bitfinex Cocktail Party",
          "10:00 pm — End"
        ]
    },
    {
        "title": "Day Three",
        "date": "Nov 18",
        "location": "Hotel Crowne Plaza, 89 Avenida Norte, San Salvador, SV",
        "items": [
          "8:00 am — Registration",
          "8:45 am — Opening",
          "6:00 pm — Bitfinex Cocktail Party",
          "10:00 pm — End"
        ]
    },
]
</script>