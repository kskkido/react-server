// import { compose } from 'ramda'
// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
// import config from '../../webpack.config.js'

// const bind = ((compiler) => (middleware, options) => () => {
//   compiler(middleware, options)
// })(webpack(config))

// const middlewares = compose(
//   bind(webpackDevMiddleware, { noInfo: true, publicPath: config.output.publicPath}),
//   bind(webpackHotMiddleware)
// )

// export default (req, res, next) =>
//   middlewares() && next()
