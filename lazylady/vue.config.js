const path = require('path');
// ...existing code...
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
};