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
  devServer: {
    port:port,
  //跨域
  proxy: {
    // change xxx-api/login => mock/login----189---86=====106
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    [process.env.VUE_APP_BASE_API]: {
      // target: `http://service.lab.ccb.com:8080/ccb_bdl`,
      // target: `http://172.20.10.2:8080/ccb_bdl`,
      // target: `http://119.36.239.77:38080/ccb_bdl`,
      target: `http://192.168.66.86:8080/ccb_bdl`,
      // target: `https://www.easy-mock.com/mock/5d0a05b354040c64d6df7fd2/example`,
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.VUE_APP_BASE_API]: ''
      }
    }
  },
 
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