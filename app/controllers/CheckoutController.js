var checkoutController = {

    checkout: function (req, res) {
        res.render('checkout/checkout', {
            title: 'Checkout',
            message: '', 
        }

        );
    }
}

module.exports = checkoutController;