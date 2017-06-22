var registerController = {

    register: function (req, res) {
        res.render('register/register', {
            title: 'Register',
            message: '', 
        }

        );
    }
}

module.exports = registerController;