  module.exports = {
    lintOnSave: false,//如果为false，就是取消eslint规则的检查

    publicPath: './', // 打包时配置，部署成功后，可访问到index.html
    devServer: {
      open: process.platform === 'darwin', // 默认打开的浏览器
      port: 8088, // 端口号
      host:'localhost',
      hotOnly: true, // 热加载
      proxy: { // 跨域配置
        '/api': { // 过滤的api
          target: 'http://127.0.0.1:1819', // 要访问的URL
          changeOrigin: true, // true，启用跨域
          ws:true,
          pathRewrite:{ // 要转发到的地址，根据需要也可不配置
            '^/api':''
          }
        }
      }
    },
    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],  可配置哪些参数转换为vw

css: {
  loaderOptions: {
    postcss: {
      plugins: [
        require("postcss-px-to-viewport")({
          unitToConvert: "px",
          viewportWidth: 1920,
           viewportHeight:1080,
          unitPrecision: 3,
          propList: [
            "*"
          ],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /(\/|\\)(node_modules)(\/|\\)/,
        })
      ]
    }
  }
},
  }
