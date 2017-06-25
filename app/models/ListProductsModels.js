const pg=require("./connectDB");
var listProductsModels={
  listproducts:function(req,res){

    pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){

             console.log(err);
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            var query='select * from products' ;
            console.log(query);
              client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                done();
              if(err){

                console.log(err);


              }
              else{
                res.render('admin/list_products', {
                    product:result.rows,
                    title: 'List Products',
                    layout: 'layout_admin',
                });

              }
            });
        }

    });
  },

  listproductsuser:function(req,res){
    pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){

             console.log(err);
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            var query='select * from products' ;
            console.log(query);
              client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                done();
              if(err){

                console.log(err);


              }
              else{
                res.render('user/products', {
                    product:result.rows,
                    title: 'List Products',
                    message: '',
                });

              }
            });
        }

    });
  },
  buy:function(req,res){
    pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){

             console.log(err);
             res.send("0");
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            var query='select orders.id from orders order by orders.id' ;
            console.log(query);
              client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                done();
              if(err){

                console.log(err);
                res.send("0");

              }
              else{
                if(result.rows.length>0)
                var id=result.rows[result.rows.length-1].id+1;
                else {
                  id=0;
                }
                var query="insert into orders values("+id+",'"+req.session.user+"',"+req.body.id_product+','+req.body.price+","+req.body.status+",'"+req.body.date+"')";
                //console.log(query);
                ////////////////////////////////////////////////
                client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                  done();
                if(err){

                  console.log(err);
                  res.send("0");

                }
                else{
                  res.send("1");

                }
              });
              //////////////////////////////////////////////////////
              }
            });
        }

    });
  }
}

module.exports = listProductsModels;
