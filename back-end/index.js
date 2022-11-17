require("./config/db")
const express = require("express");
const indexRoutes = require('./routes/indexRoutes')
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
app.use("/",indexRoutes)
app.listen(8000, ()=>{
    console.log("server connected")
})
