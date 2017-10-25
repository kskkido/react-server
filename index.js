const { env } = require('process'),
      pkg = require('./package.json')

if (env.NODE_ENV === undefined) {
  Object.assign(env, {NODE_ENV: 'DEVELOPMENT'})
}

module.exports = {
  get port () { return env.PORT || 1337 },
  get name () { return pkg.name },
  get url () { return env.BASE_URL || `http://localhost:${module.exports.port}`},
  get root () { return __dirname },
  package: pkg,
  env
}
