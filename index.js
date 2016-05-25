module.exports = {
  plugins: [
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-check-es2015-constants')
  ]
}
