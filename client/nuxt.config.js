export default {
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  telemetry: false,

  loading: false,

  vue: {
    config: {
      productionTip: true
    }
  },

  css: [],

  styleResources: {},

  plugins: [],

  components: true,

  features: {
    store: true,
    layout: true,
    meta: true,
    middleware: true,
    transition: false,
    deprecation: false,
    validate: false,
    asyncData: true,
    fetch: true,
    clientOnline: true,
    clientPrefetch: true,
    clientUserUrl: true,
    componentAliases: true,
    componentClientOnly: true
  },

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  modules: [],

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: {
      total: true
    }
  },

  /**
   * tailwind
   */
  tailwindcss: {
    configPath: 'tailwind.config.js',
    jit: false,
    viewer: false
  },

  router: {},

  /*
    ** Build configuration
    */

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 182 * 1000
    }
  },

  /*
    ** Build configuration
    */
  build: {
    cache: true,
    parallel: true,

    filenames: {
      app: ({ isModern, isDev }) =>
        `${!isModern ? 'legacy-' : ''}${!isDev ? '[contenthash]' : ''}--[name]--app.js`,
      chunk: ({ isModern, isDev }) =>
        `${!isModern ? 'legacy-' : ''}${!isDev ? '[contenthash]' : ''}--[name]--chunk.js`
    },

    loaders: {
      scss: { sourceMap: process.env.NODE_ENV === 'production' },
      vue: { cacheBusting: process.env.NODE_ENV === 'production' }
    },

    babel: {
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ['last 2 versions'] },
          server: { node: 'current' }
        }
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: envTargets[envName],
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true
      }
    },

    terser: {
      cache: true
    }
  },

  env: {
    BASEAPIURL: process.env.BASE_API_URL,
    BASEAPIBROWSERURL: process.env.BASE_API_BROWSER_URL
  }
}
