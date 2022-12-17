export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  loading: false,

  app: {
    head: {
      title: 'app',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  vue: {
    config: {
      productionTip: true
    }
  },

  plugins: [],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: false,
    viewer: false
  },

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/setup.scss" as *;'
        }
      }
    }
  },

  /*
    ** Build configuration
    */

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 182 * 1000
    }
  },

  runtimeConfig: {
    public: {
      BASE_API_URL: '',
      BASE_API_BROWSER_URL: ''
    }
  }
})
