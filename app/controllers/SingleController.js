var singleController = {

    single: function (req, res) {
        res.render('single/single', {
            title: 'Single',
            message: '', 
        }

        );
    }
}

module.exports = singleController;