const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const path = require('path')
const dotenv = require('dotenv')
const connectDB=require('./server/database/connection')


const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT 
//log request time taken
app.use(morgan('tiny'));

// connecting mongoDb
connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

// set view engine
app.set('view engine','ejs');

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))  

// load routers
app.use('/',require('./server/routes/router'))

//assign the port number
app.listen(PORT,()=>{console.log('server start running in "http://localhost:8080"')})