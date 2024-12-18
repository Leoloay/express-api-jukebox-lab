const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()
const mongoose = require("mongoose")

const tracksRouter = require("./controllers/tracks.js")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

app.use("/tracks", tracksRouter)

app.listen(3000, () => {
  console.log("The express app is ready!")
})
