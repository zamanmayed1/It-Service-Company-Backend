const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const app = require('./app')

// Database Connection

mongoose.connect(process.env.DATABASE_COMPASS_URL).then(()=>{
    console.log('Database Connected');
})

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Server is Running Well");
})
