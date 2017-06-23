var listproductsController = {

    listproducts: function (req, res) {
        res.render('admin/list_products', {
            title: 'List Products',
            layout: 'layout_admin', 
        }

        );
    }
}

module.exports = listproductsController;