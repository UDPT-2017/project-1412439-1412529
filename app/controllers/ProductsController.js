var productsController = {

    products: function (req, res) {
        res.render('user/products', {
            title: 'Products',
            message: '', 
        }

        );
    }
}

module.exports = productsController;