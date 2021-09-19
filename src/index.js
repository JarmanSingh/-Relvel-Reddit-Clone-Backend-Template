const express = require('express')
const cors = require('cors')

const usersRouter = require('./routers/users')
const threadsRouter = require('./routers/threads')

const port = 8080;

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/threads', threadsRouter)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})