require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var navList = require('../mock/navList.json')
var indexData = require('../mock/indexData.json')
var buyData = require('../mock/buyData.json')
var listData = require('../mock/listData.json')
var listData2 = require('../mock/listData2.json')
var typeClass = require('../mock/typeClass.json')
var typeBrand = require('../mock/typeBrand.json')
var weShopData = require('../mock/weShop.json')
var searchData = require('../mock/searchData.json')

// 引入数据库
var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求
apiRoutes.get('/navList', function (req, res) {
  res.json(navList);
})
apiRoutes.get('/indexData', function (req, res) {
  res.json(indexData);
})
apiRoutes.get('/buyData', function (req, res) {
  res.json(buyData);
})
apiRoutes.get('/juHomeCont', function (req, res) {
  res.json(juHomeCont);
})
apiRoutes.get('/juHomeTitle', function (req, res) {
  res.json(juHomeTitle);
})
apiRoutes.get('/typeClass', function (req, res) {
  res.json(typeClass);
})
apiRoutes.get('/typeBrand', function (req, res) {
  res.json(typeBrand);
})
apiRoutes.get('/weShopData', function (req, res) {
  res.json(weShopData);
})
apiRoutes.get('/listData', function (req, res) {
  res.json(listData);
})
apiRoutes.get('/listData2', function (req, res) {
  res.json(listData2);
})
apiRoutes.get('/searchData', function (req, res) {
  res.json(searchData);
})
// 调用api
app.use('/api', apiRoutes)

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
