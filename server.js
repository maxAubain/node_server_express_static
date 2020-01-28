const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// const process.env.ALTPORT = 3030
const port = process.env.ALTPORT || 3000

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404')

  //or
  //res.type('text/plain').status(404).send('404 - Not Found')

  // or 
  //res.sendStatus(404)
})

// 500 page
app.use((req, res) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

app.listen(port, () => {
  console.log(`App is listening on https://localhost:${port}; ` + `press Ctrl-C to terminate.`)
  // console.log(`'Process' object, 'Environment' property port: ${process.env.ALTPORT}`)
})
