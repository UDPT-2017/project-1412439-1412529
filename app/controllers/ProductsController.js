var models = require('../models');

var productsController = {
	products: function(req, res){
    	models.listproducts.listproductsuser(req, res);
	}
}

module.exports = productsController;