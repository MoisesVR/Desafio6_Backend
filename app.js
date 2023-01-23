const app = require('./server')

app.use('/', require('./src/routes/registerRoutes'))
app.use('/', require('./src/routes/loginRoutes'))

module.exports = app