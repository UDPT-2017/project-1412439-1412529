var homeController = {
    index: function (req, res) {
        res.render('home/index', {
            title: 'Home',
            message: '',
        });
    },

    home: function (req, res) {
        res.render('home/index', {
            title: 'Home',
            message: '', 
        }

        );
    }
}

module.exports = homeController;