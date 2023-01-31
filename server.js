const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const homeRoutes = require('./routes/main')


dotenv.config({path: './config/.env'});

// Database connection
connectDB();


//General Setting 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes

app.use('/', homeRoutes)


app.listen(process.env.PORT, () => console.log(`It is alive on port ${process.env.PORT}`))