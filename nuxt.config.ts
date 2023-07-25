// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/image-edge',
        '@nuxt/content',
        'nuxt-swiper'
    ],

    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        modules: ['navigation', 'pagination'], // all modules are imported by default
    },

    features: {
        transitions: true,
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/main.scss',
    ],
    plugins: [
        {
            src: '@/plugins/vue-marquee-slider.js', mode: 'client'
        },
        {
            src: '@/plugins/aos.js', mode: 'client'
        }
    ],
    vue: {
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
            Poppins: {
                wght: [100, 200, 300, 400],
            },
        }
    },

    ssr: true,
    target: 'static',
    app: {
        baseURL: process.env.DIR,
        rootDir: process.env.DIR,
        head: {
            title: 'Adopting Bitcoin 2024',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'google', content: 'notranslate'},
                {"http-equiv": 'Content-Language', content: 'en'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: process.env.DIR + 'favicon/favicon-16x16.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: process.env.DIR + 'favicon/favicon-32x32.png'},
                {
                    rel: 'apple-touch-icon',
                    type: 'image/png',
                    sizes: '180x180',
                    href: process.env.DIR + '/favicon/apple-touch-icon.png'
                },
                {rel: 'mask-icon', color: '#000000', href: process.env.DIR + 'favicon/safari-pinned-tab.svg'},
                {rel: 'manifest', href: process.env.DIR + 'favicon/site.webmanifest'},
            ],
            htmlAttrs: {
                lang: 'en'
            }
        },
    },
    experimental: {
        payloadExtraction: false,
    }
})