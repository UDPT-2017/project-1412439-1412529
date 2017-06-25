var models = require('../models');

var singleController = {

    single: function (req, res) {
  //      models.singleProduct.singleModel(req, res);
  		res.render('user/single', {
            title: 'Single',
            message: '', 
        });
    }
}

module.exports = singleController;