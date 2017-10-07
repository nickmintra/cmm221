const express = require('express')
const { twig } = require('twig')

const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.Controller')
const newsController = require('./controllers/news.Controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets',express.static(__dirname+'/static/assets',{
	maxAge:86400000
}))

app.listen(8000, function(err) {
	console.log('server is running on port 8000')
})