const pg = require("./connectDB");

var singleModel = {
  singleModel: function(req, res){
    console.log('Xoa san pham ' + req.params.id);
    pg.connect(function(err, client, done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
      client.query("select * from products where id = '" + req.params.id + "'", function(err, result) {
        done();
        if(err) {
          res.end();
          return console.error('error running query', err);
        } 
        console.log('Xoa san pham thanh cong');
        res.render('user/single', {
          product: result.rows[0]

        });
      //});
        //res.send(result.rows[0]);
      });
    });
  }
}

module.exports = singleModel;
