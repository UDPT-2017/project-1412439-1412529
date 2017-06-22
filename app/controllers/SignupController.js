var signupController = {

    signup: function (req, res) {
        res.render('signup/signup', {
            title: 'Signup',
            message: '', 
        }

        );
    }
}

module.exports = signupController;