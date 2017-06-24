var model=require("../models")
var addproductsController = {

    addproducts: function (req, res) {
        res.render('admin/add_product', {
            title: 'Add Products',
            layout: 'layout_admin',
        }

        );
    },
    addproducts_post:function(req,res,next){
      model.addproducts.addproducts(req,res,next);

    }
}

module.exports = addproductsController;
