const {MongoClient} = require('mongodb');
require('dotenv').config();

//database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g1juc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
let db;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {db, client};