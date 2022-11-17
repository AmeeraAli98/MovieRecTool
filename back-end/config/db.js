
//Imported mongoose library
const mongoose = require('mongoose')
const dotvenv = require("dotenv")

dotvenv.config()
//Connect to our mongo DB
mongoose.connect(process.env.DATABASE_URL)

// Display message when connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!!!')
})



