var model=require("../models")

var deleteProductController = {

    deleteProduct: function (req, res) {
        model.deleteProducts.delete(req, res);
    },
    deleteProducts_post:function(req,res,next){
     // model.addproducts.addproducts(req,res,next);

    }
}

module.exports = deleteProductController;