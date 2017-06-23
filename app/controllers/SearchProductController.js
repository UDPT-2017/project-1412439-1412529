var searchProductController = {

    search: function (req, res) {
        res.render('admin/search', {
            title: 'Search Product',
            layout: 'layout_admin', 
        }

        );  
    }
}

module.exports = searchProductController;