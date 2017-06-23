var addproductsController = {

    addproducts: function (req, res) {
        res.render('admin/add_product', {
            title: 'Add Products',
            layout: 'layout_admin', 
        }

        );
    }
}

module.exports = addproductsController;