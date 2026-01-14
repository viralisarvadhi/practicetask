require('dotenv').config()
const express = require('express');
const app = express();
//const path = require('path')
const posts = require('./routes/posts')
//const errorhandler = require('./middleware/error')
//const port = 3000;
//setup static folder
const logger = require('./middleware/logger')
//app.use(express.statics(Path.join(__dirname, 'public')))
const connectDB = require('./config/db')

//body parser middleware 
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}));
//added logger middleware
app.use(logger)
//app.use(errorhandler)

//get all post
app.use('/api/posts',posts)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});


