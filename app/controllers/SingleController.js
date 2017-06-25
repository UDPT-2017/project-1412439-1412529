var models = require('../models');

var singleController = {

    single: function (req, res) {
        models.singleProduct.singleModel(req, res);
  		

    }
}

module.exports = singleController;