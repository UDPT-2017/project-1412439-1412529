var homeController = {
    index: function (req, res) {
        res.render('user/index', {
            title: 'Home',
            message: '',
        });
    },

    home: function (req, res) {
        res.render('user/index', {
            title: 'Home',
            message: '', 
        }

        );
    }
}

module.exports = homeController;