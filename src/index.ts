import express from 'express'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import fileUpload from 'express-fileupload'

import mongoose from 'mongoose'
Promise = require('bluebird')
import routes from './routes'
import { MONGO_HOST } from './config'
mongoose.Promise = Promise

const HOST = MONGO_HOST || process.env.MONGO_HOST
mongoose.connect(HOST)
mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${HOST}`)
})



const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array())

app.use(fileUpload())

app.use('/api', routes)

// app.use(express.static(path.join(__dirname, "uploads")))

app.use(express.static(`${__dirname}/build`))

app.use('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
})

const port = process.env.PORT || 5001
console.log("processPort: ", process.env.PORT)
app.listen(port, () => {
  console.info(`server started on port ${port}`) // eslint-disable-line no-console
})