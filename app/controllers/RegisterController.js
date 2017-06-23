var registerController = {

    register: function (req, res) {
        res.render('user/register', {
            title: 'Register',
            message: '', 
        }

        );
    }
}

module.exports = registerController;