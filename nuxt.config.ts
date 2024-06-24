// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/content',
    ],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    colorMode: {
        classSuffix: '',
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml'],
        }
    },
    future: {
        compatibilityVersion: 4,
    },
    content: {
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark',
                sepia: 'monokai'
            }
        },
    }
})