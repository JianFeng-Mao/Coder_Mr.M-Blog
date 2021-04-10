module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('url')
      .test(/\.(cur|ani)$/)
      .use('url-loader')
      .loader('url-loader')
      .end();
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicPath: '/',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        // 代理
        target: 'https://test.my-site.com',
      },
    },
  },
};
