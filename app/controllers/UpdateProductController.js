var updateProductController = {

    update: function (req, res) {
        res.render('admin/add_product', {
            title: 'Update Products',
            layout: 'layout_admin',
        }

        );
    },

}

module.exports = updateProductController;