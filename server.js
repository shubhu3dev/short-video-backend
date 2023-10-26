import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Videos from './dbModel.js'
import dotenv from 'dotenv'

//App Config
dotenv.config()
const app = express()
const port = process.env.PORT || 9000
const connection_url = process.env.CONNECTION_URL

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
    }
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/v2/posts', async (req, res) => {
    try{
        const dbVideos = req.body
        const data = await Videos.create(dbVideos);
        res.status(200).send(data)
    }
    catch(err) {
        res.status(500).send(err)
    }

})

app.get('/v2/posts', async (req, res) => {
    try{
        const data = await Videos.find({ });
        res.status(200).send(data)
    }
    catch(err) {
        res.status(500).send(err)
    }

})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))