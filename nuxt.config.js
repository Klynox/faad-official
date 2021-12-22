export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FAAD Oil LTD - #1 Nationwide fuels and lubricants supplier',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: 'FAAD runs a 24/7 fuel supply and procurement service to over 200 offices, homes, schools and events.' },
      { name: 'keywords', content: 'FAAD, 24/7 fuel supply, fuel delivery, petrol, diesel, kerosene, fast petrol delivery, sweet fuel delivery, quality diesel delivery.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#f58634' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#f58634' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'FAAD Oil LTD - #1 Nationwide fuels and lubricants supplier' },
      { name: 'twitter:site', content: 'https://faadoil.com' },
      { name: 'twitter:title', content: 'FAAD Oil' },
      { name: 'twitter:description', content: 'FAAD runs a 24/7 fuel supply and procurement service to over 200 offices, homes, schools and events.' },
      { name: 'twitter:creator', content: '@faadoil' },
      { name: 'twitter:image', content: 'https://i.imgur.com/YthrAGw.png' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'revisit-after', content: '1 days' },
      { property: 'og:title', content: 'FAAD Oil LTD - #1 Nationwide fuels and lubricants supplier' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://faadoil.com' },
      { property: 'og:image', content: 'https://i.imgur.com/YthrAGw.png' },
      { property: 'og:description', content: 'FAAD runs a 24/7 fuel supply and procurement service to over 200 offices, homes, schools and events.' },
      { property: 'og:site_name', content: 'FAAD Oil LTD' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://pure-dawn-47319.herokuapp.com',
    proxy: true
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  vendor: [
    'firebase'
  ],

  server: {
    host: "0.0.0.0"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
