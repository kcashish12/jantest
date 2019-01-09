const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');

const ProductRouter = require('./route/product');
const Productmodel = require('./model/products');


mongoose.connect(config.database,{useNewUrlParser: true});
mongoose.connection.on('connected', (req, res, next)=>{
	console.log('Database is connected on :' + config.database);
});
mongoose.connection.on('error', ( req, res, next)=>{
	console.log('Darabase is not connected on :' + err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/register', ProductRouter);


const port = 3000;

app.listen(port,()=>{
	console.log(`you are listern to port : ${port}`);
});
