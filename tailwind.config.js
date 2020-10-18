module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './components/**/*.js',
      './pages/**/*.js'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
