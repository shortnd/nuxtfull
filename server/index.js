const fs = require('fs')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const config = require('../nuxt.config.js')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const uri = `mongodb://localhost:27017`
  mongoose
    .connect(uri, {
      dbName: 'nuxtfull',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Database Connected')
    })
    .catch((err) => {
      console.log(`Error: ${err.stack}`)
    })

  app.use(bodyParser.json())

  fs.readdirSync('controllers').forEach((file) => {
    if (file.substr(-3) === '.js') {
      const controller = require(`../controllers/${file}`)
      app.use('/', controller)
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
