var checkoutController = {

    checkout: function (req, res) {
        res.render('user/checkout', {
            title: 'Checkout',
            message: '', 
        }

        );
    }
}

module.exports = checkoutController;