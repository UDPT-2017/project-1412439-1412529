var signupController = {

    signup: function (req, res) {
        res.render('user/signup', {
            title: 'Signup',
            message: '', 
        }

        );
    }
}

module.exports = signupController;