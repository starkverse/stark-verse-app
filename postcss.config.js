module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'tailwindcss/nesting',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}