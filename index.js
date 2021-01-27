const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const x = 'ciaociao'

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send({utente:'marco'}))
  // .get('/ccc', (req, res) => res.render('pages/data'))
  // .get('/x', (req, res) => res.render(x))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))