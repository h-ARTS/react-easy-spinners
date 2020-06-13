const React = require('react')
const ReactDOM = require('react-dom/server')
const { Heart, DualRing, Roller } = require('react-easy-spinners')
const express = require('express')

const port = 3000
const app = express()

// app.use(function (req, res) {
//   req.headers = {
//     'access-control-allow-origin': '*'
//   }
// })

app.get('/', (req, res) => {
  const el = React.createElement(React.Fragment, null, Heart, DualRing, Roller)

  const html = ReactDOM.renderToString(el)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        body {
          background: #222;
        }
      </style>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () =>
  console.log(`Server listening on Port: http://localhost:${port}/`)
)
