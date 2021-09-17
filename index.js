const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const {db, client} = require('./db/connection');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req, res)=> res.send('welcome to server'));

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
    client.connect(err=>{
        console.log('database connected');
        db = client.db;
    })
})