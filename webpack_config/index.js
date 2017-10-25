const enhance = require('./enhance'),
      clientConfig = require('./client'),
      serverConfig = require('./server')

module.exports = [serverConfig, clientConfig].map(enhance)
