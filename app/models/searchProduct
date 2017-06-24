const pg = require("./connectDB");

var searchProduct = {
  searchProducts: function(req, res){
    console.log('Dang tim san pham' + req.param('s'));
    pg.connect(function(err, client, done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
      client.query("select * from products where name like '%" + req.param('s') + "%'", function(err, result) {
        done();
        if(err) {
          res.end();
          return console.error('error running query', err);
        } 
        if(result.lenght > 0){
          //console.log(result.rows[0].name);
          res.render('admin/search', {
              products: result.rows,
              title: 'Search Products',
              layout: 'layout_admin',
          });
        }
        else{
          res.render('admin/search', {
              products: result.rows,
              title: 'Search Products',
              layout: 'layout_admin',
          });
        }
      });
    })
  },

  searchResult: function(req, res){
    res.render('admin/search', {
            products: result.rows,
            title: 'Search Products',
            layout: 'layout_admin',
        });
  }
}

module.exports = searchProduct;
