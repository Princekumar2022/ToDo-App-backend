const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDb is connected..'))
    .catch((err) => console.log(err))


app.use(routes)

app.listen(PORT, () => console.log(`server start on: ${PORT}`))