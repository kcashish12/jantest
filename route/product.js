const express = require('express');
const router = express.Router();
const Product = require('../model/products'); 
const config = require('../config/database');


router.get('/', (req, res, next)=>{
	res.send('GET')
});

router.post('/',(req, res, next)=>{
	const product = new Product({
		name: req.body.name,
		price: req.body.price
	});
	product.save()
	.then(result =>{
		res.status(200).json({
			message: "Created product successfully",
			createdProduct:{
				name: result.name,
				price: result.price
			}
		});
	})
	.catch(err =>{
		res.send(404).json({
			success: false,
			err:err
		});
	});

});



module.exports = router;