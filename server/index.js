
// importing the required files
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/database.js'


// basic setup for the server side 
const app = express()
dotenv.config()


// starting the server for our project 
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
    try {
        connectDB()

    } catch (error) {
        console.log(`Failed to connect to database...`)

    }
})

