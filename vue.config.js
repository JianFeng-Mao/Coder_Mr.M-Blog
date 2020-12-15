module.exports ={
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('url')
      .test(/\.(cur|ani)$/)
      .use('url-loader')
        .loader('url-loader')
        .end()
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  assetsDir: 'static',
}