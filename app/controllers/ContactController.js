var contactController = {

    contact: function (req, res) {
        res.render('user/contact', {
            title: 'Contact',
            message: '', 
        }

        );
    }
}

module.exports = contactController;