const pg=require("./connectDB");

var addProductsModels={
addproducts:function(req,res,next){
  pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
        if(err){

           console.log(err);
         }
         else{//ket noi thanh cong
          console.log("connect to postgres");
      //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
        //  var query='select * from product' ;
        //  console.log(query);
          var query1 = 'select * from products';
          var id;
          /////////////////////////////////////////////////
          client.query(query1, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
            done();
          if(err){

            console.log(err);


          }
          else{

            //for(var i=0;i<result.rows.length;i++){
            //var str='img'+result.rows.length;
            //cb(null,str);
            id=result.rows.length;
              console.log('success');
              var query="insert into products values(" + id + ",'"+req.body.categoryName+"','"+req.body.productName+"',"+req.body.price+",'"+req.body.description+"','"+req.body.note+"')"
              console.log(query);
                client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                  done();
                if(err){

                  console.log(err);


                }
                else{

                  //for(var i=0;i<result.rows.length;i++){
                  //var str='img'+result.rows.length;
                  //cb(null,str);
                    console.log('success');
                    res.send("THEM SAN PHAM THANH CONG");
                  //}

                }
              });
            //}

          }
        });
          ////////////////////////////////////////////////



      }

       });
}
}
module.exports =addProductsModels;
