var models = require('../models');

var searchProductController = {
	/*
    search: function (req, res) {
        res.render('admin/search', {
            title: 'Search Product',
            layout: 'layout_admin', 
        });  
    }
    */
    search: function (req, res) {
    	models.searchProducts.searchProducts(req, res);
    }
}

module.exports = searchProductController;