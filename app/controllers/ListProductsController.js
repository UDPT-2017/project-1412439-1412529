const pg=require("../models/connectDB");
var model=require("../models")
var listproductsController = {
    listproducts: function (req, res) {
  		model.listproducts.listproducts(req,res);
    }
}
module.exports = listproductsController;
