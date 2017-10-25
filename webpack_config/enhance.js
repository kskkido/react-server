const { env } = require('../'),
      IS_DEV = env.NODE_ENV === 'DEVELOPMENT',
      webpack = require('webpack'),
      LiveReloadPlugin = require('webpack-livereload-plugin'),
      CompressionPlugin = require('compression-webpack-plugin')

const DEFAULT_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '\'' + env.NODE_ENV + '\''
    }
  })
]

const DEV_PLUGINS = [
  new LiveReloadPlugin({appendScriptTag: true})
]

const PROD_PLUGINS = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false, // Suppress uglification warnings
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi]
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
]

const PLUGINS = [...DEFAULT_PLUGINS, ...IS_DEV ? DEV_PLUGINS : PROD_PLUGINS]

module.exports = (config) => {
  const plugins = (config.plugins || []).concat(PLUGINS),
        devtool = IS_DEV ? config.devtool : undefined

  return Object.assign({}, config, { devtool, plugins })
}

