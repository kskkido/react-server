import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../common';
import { env, port } from '../'

const IS_DEV = env.NODE_ENV === 'DEVELOPMENT'

const app = express()
  .use(express.static('app/public'))
  .get('*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <head>
          <title>Universal Reacl</title>
          <script src='/bundle.js' defer></script>
        </head>
        <body>
          <h1>LOL</h1>
          <div id='root'>${renderToString(<App />)}</div>
        </body>
      </html>
    `)
  })
  .listen(port, () => {
    console.log('Server is listening on', port);
  })
