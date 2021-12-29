const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/',require('./routes/route.js'))
app.use(require('./routes/unknown.js'))

app.listen(port, () => {
  console.log(`App listening at port ${port} on https://indian-names-api/name`)
})