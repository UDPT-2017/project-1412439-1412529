const pg = require("./connectDB");

var deleteProduct = {
  delete: function(req, res){
    console.log('Xoa san pham ' + req.params.id);
    pg.connect(function(err, client, done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
      client.query("delete from products where id = '" + req.params.id + "'", function(err, result) {
        done();
        if(err) {
          res.end();
          return console.error('error running query', err);
        } 
        console.log('Xoa san pham thanh cong');
        res.redirect('http://localhost:3000/admin/product/list-product');
      });
    })
  },
}

module.exports = deleteProduct;
