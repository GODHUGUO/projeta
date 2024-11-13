// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],


  plugins: [
    '@/plugins/scrollReveal.js' // Chemin vers le plugin
  ],
  // Configuration du routeur pour gérer le défilement avec ancres
  // router: {
  //   scrollBehavior(to, from, savedPosition) {
  //     if (to.hash) {
  //       return { el: to.hash, behavior: 'smooth' };
  //     }
  //     return savedPosition || { x: 0, y: 0 };
  //   }
  // }

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return { el: to.hash, behavior: 'smooth' };
      }
      return { x: 0, y: 0 };
    }
  }
})