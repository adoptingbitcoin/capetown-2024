<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    data() {
        return {
            email: '',
            error: false,
            success: false,
            loading: false,
            errorMessage: ''
        }
    },
    methods: {
        onError() {
            console.log('Error subscribing to Newsletter!')
        },
        onSuccess() {
            console.log('Successfully Subscribed to Newsletter!')
        },
        async subscribe() {
            if (this.email === '') {
                return
            }
            this.loading = true
            this.success = false
            this.error = false
            const result = await fetch('https://bitkushin.space/adoptingbitcoin_mail_subscribe.php?email=' + this.email)
            this.loading = false
            if (result.ok) {
                this.success = true
                this.email = ''
            } else {
                this.success = false
                this.error = true
                const errorMessage = await result.json()
                console.log(errorMessage)
                this.errorMessage = errorMessage.message
            }
        }
    }
})
</script>

<template>

    <div class="component bg-clouds">
        <StraightBanner top-image="/images/section-heading--subscribe.svg"/>

        <div class="container">
            <form @submit.prevent="subscribe">
                <div class="flex">
                    <div class="col-span-1 flex-1">
                        <h5 class="text-3xl mb-24">Subscribe to our mailing list</h5>
                        <input v-model="email" type="email" placeholder="enter your email here"
                               class="w-full text-xl border-b bg-transparent active:bg-transparent focus:outline-none pb-2">
                        <div v-if="error">
                            There was an Error! <br>
                            {{ errorMessage }}
                        </div>
                        <div v-if="success">
                            Signup successful! Please check your inbox for a confirmation email.
                        </div>
                        <div v-if="loading">
                            Loading…
                        </div>
                        <button type="submit" class="uppercase underline mt-5 text-xl inline md:hidden">sign me up
                        </button>
                    </div>

                    <div class="flex-col-reverse flex-1 justify-between hidden lg:flex">
                        <button type="submit" class="uppercase underline text-xl text-center">sign me up</button>

                        <div class="">
                            <div class="uppercase w-fit">
                                <a target="_blank" href="https://t.me/AdoptingBTC">/telegram</a> &nbsp;
                                <a target="_blank" href="https://www.linkedin.com/company/76150672">/linkedin</a> &nbsp;
                                <a target="_blank" href="https://twitter.com/AdoptingBTC">/twitter</a> &nbsp;
                                <a target="_blank"
                                   href="https://snort.social/p/npub1ad0ptuzte83alpkpqqctvewlaqj5zq23c83m82xw8apg4t6zlyns6xng2c">/nostr</a>
                                &nbsp;
                                <a target="_blank" href=" https://github.com/nuraelb/AdoptingBitcoin">/GitHub</a> &nbsp;
                                <br>
                                <a href="mailto:capetown@adoptingbitcoin.org">email if you need /
                                    capetown@adoptingbitcoin.org</a>

                            </div>
                        </div>
                    </div>

                </div>

            </form>
        </div>

    </div>

</template>

<style scoped>

</style>