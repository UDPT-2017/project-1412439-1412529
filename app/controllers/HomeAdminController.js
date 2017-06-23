var homeAdminController = {

    homeAdmin: function (req, res) {
        res.render('admin/homeAdmin', {
            title: 'Admin Pages',
            layout: 'layout_admin', 
        }

        );
    }
}

module.exports = homeAdminController;