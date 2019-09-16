'use strict'

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'


const webpack = require('webpack')


const port = 9527 // dev port
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  //打包时不生成map文件
  productionSourceMap: false,
  //跨域
  devServer: {
    port:port,
 
  },

  configureWebpack: {
    plugins: [
     new webpack.ProvidePlugin({
       $:"jquery",
       jQuery:"jquery",
       "windows.jQuery":"jquery"
     })
   ]
 }
}