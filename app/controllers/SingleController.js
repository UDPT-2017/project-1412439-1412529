var singleController = {

    single: function (req, res) {
        res.render('user/single', {
            title: 'Single',
            message: '', 
        }

        );
    }
}

module.exports = singleController;