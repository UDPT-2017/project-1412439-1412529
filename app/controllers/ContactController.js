var contactController = {

    contact: function (req, res) {
        res.render('contact/contact', {
            title: 'Contact',
            message: '', 
        }

        );
    }
}

module.exports = contactController;