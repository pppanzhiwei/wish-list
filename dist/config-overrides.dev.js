"use strict";

var _require = require('customize-cra'),
    override = _require.override,
    addWebpackAlias = _require.addWebpackAlias,
    addDecoratorsLegacy = _require.addDecoratorsLegacy,
    addPostcssPlugins = _require.addPostcssPlugins,
    fixBabelImports = _require.fixBabelImports,
    addLessLoader = _require.addLessLoader;

var path = require('path');

var resolve = function resolve(dir) {
  return path.resolve(__dirname, dir);
}; // 引入postCss插件


var postcssAspectRatioMini = require('postcss-aspect-ratio-mini');

var postcssPxToViewport = require('postcss-px-to-viewport');

var postcssWriteSvg = require('postcss-write-svg');

var postcssCssnext = require('postcss-cssnext');

var postcssViewportUnits = require('postcss-viewport-units');

var cssnano = require('cssnano');

module.exports = override(addLessLoader(), addPostcssPlugins([require('postcss-flexbugs-fixes'), postcssAspectRatioMini({}), postcssPxToViewport({
  viewportWidth: 375,
  // (Number) The width of the viewport.
  unitPrecision: 3,
  // (Number) The decimal numbers to allow the REM units to grow to.
  viewportUnit: 'vw',
  // (String) Expected units.
  selectorBlackList: ['.ignore', '.hairlines'],
  // (Array) The selectors to ignore and leave as px.
  minPixelValue: 1,
  // (Number) Set the minimum pixel value to replace.
  mediaQuery: false // (Boolean) Allow px to be converted in media queries.

}), postcssWriteSvg({
  utf8: false
}), postcssCssnext({}), postcssViewportUnits({}), cssnano({
  // preset: "advanced",
  autoprefixer: false,
  'postcss-zindex': false
})]), fixBabelImports('babel-plugin-import', {
  libraryName: 'antd-mobile',
  libraryDirectory: 'es/components',
  style: true
}), addDecoratorsLegacy(), // ES7装饰器
addWebpackAlias({
  '@': resolve('src')
}));