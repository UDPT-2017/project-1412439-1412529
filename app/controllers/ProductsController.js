var models = require('../models');

var productsController = {
	products: function(req, res){
    	models.listproducts.listproductsuser(req, res);
	},
	buy:function(req,res){
		models.listproducts.buy(req,res);
	}
}

module.exports = productsController;
