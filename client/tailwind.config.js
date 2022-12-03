module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false
  },
  content: [
    'components/*.vue',
    'layouts/*.vue',
    'pages/*.vue',
    'nuxt.config.js'
  ],
  safelist: [
    'whitelisted',
    {
      pattern: /col-(span|start)-\d*$/,
      variants: ['sm', 'md', 'lg', 'xl']
    }
  ]
}
