/* Express library */
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* Handlebars (view engine) */
const expressHandlebars = require('express-handlebars')
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

/* API config */
app.use(express.static(__dirname + '/public'))

/* API routes */
// home
app.get('/', (req, res) => {
  res.render('home')
})

// about
app.get('/about', (req, res) => {
  res.render('about')
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404')
})

// 500 page
app.use((req, res) => {
  console.error(err.message)
  res.status(500).render('500')
})

/* Console */
// Development console message while server is running
app.listen(port, () => {
  console.log(`App is listening on https://localhost:${port}; ` + `press Ctrl-C to terminate.`)
})
