// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.mayeinfo.com/pet',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// .env.development
// VUE_APP_BASE_API = "/api"