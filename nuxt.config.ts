// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/styles/reset.css',
    ],
    runtimeConfig: {
        token: ``, 
        public: {
            apibase: `/api`
        }
    }
})