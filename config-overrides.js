const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  addPostcssPlugins,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

// 引入postCss插件
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

module.exports = override(
  addLessLoader(),
  addPostcssPlugins([
    require('postcss-flexbugs-fixes'),
    postcssAspectRatioMini({}),
    postcssPxToViewport({
      viewportWidth: 375, // (Number) The width of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    }),
    postcssWriteSvg({
      utf8: false,
    }),
    postcssCssnext({}),
    postcssViewportUnits({}),
    cssnano({
      // preset: "advanced",
      autoprefixer: false,
      'postcss-zindex': false,
    }),
  ]),
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es/components',
    style: true,
  }),
  addDecoratorsLegacy(), // ES7装饰器
  addWebpackAlias({
    '@': resolve('src'),
  })
);
