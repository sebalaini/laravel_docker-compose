module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue'
    ],
    theme: {},
    variants: {},
    plugins: []
  }
}
