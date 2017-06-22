var productsController = {

    products: function (req, res) {
        res.render('products/products', {
            title: 'Products',
            message: '', 
        }

        );
    }
}

module.exports = productsController;