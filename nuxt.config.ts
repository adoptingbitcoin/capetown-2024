// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/main.scss',
    ],
    plugins: [
        {
            src: '@/plugins/vue-marquee-slider.js', mode: 'client'
        },
    ],
    vue : {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    // Defaults options
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        injectPosition: 'first',
        viewer: true,
    },

    googleFonts: {
        download: true,
        families: {
            Poppins: true,
        }
    }
})
