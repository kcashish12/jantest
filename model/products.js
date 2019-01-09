const mongoose = require('mongoose');
const config = require('../config/database');

const productsSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	price:{
		type:Number,
		require: true
		
	}

});





module.exports = mongoose.model('Product', productsSchema);
