const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  addPostcssPlugins
} = require('customize-cra')
const path = require('path')
const {
  addLessLoader
} = require('customize-cra');

const CompressionWebpackPlugin = require('compression-webpack-plugin');

const addCustomize = () => config => {
  // 打包模式
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; //去除map文件

    // 添加js打包gzip配置
    config.plugins = [...config.plugins, new CompressionWebpackPlugin({
      test: /.js$|.css$/, // 压缩js与css
      threshold: 1024, // 只处理比这个值大的资源，单位字节
    })]
  } else if (process.env.NODE_ENV === 'development') {}
  return config
}

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { //全局公用样式，可以将此文件提出，专门做一个配置文件
        '@primary-color': '#1DA57A'
      },
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  }),
  process.env.NODE_ENV === 'production' ? addPostcssPlugins([require("postcss-px2rem-exclude")({
    remUnit: 37.5,
    exclude: /node_modules/i
  })]) : null,
  addDecoratorsLegacy(),
  addCustomize(),
);