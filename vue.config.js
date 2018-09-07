module.exports = {
  devServer: {
    proxy: {
      // proxy all requests starting with /api to doom-client when developing in docker-compose
      '/api/*': {
        target: 'http://doom-client:8080',
        changeOrigin: true
      }
    }
  }
}