const pg=require("./app/models/connectDB");
var express = require('express');
var app = express();
var multer=require('multer');
var id;
var storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/images/uploads');
  },
  filename:function(req,file,cb){

    pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){

             console.log(err);
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            var query='select * from products' ;
            console.log(query);
              client.query(query,function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                done();
              if(err){

                console.log(err);


              }
              else{

                //for(var i=0;i<result.rows.length;i++){
                var str=file.originalname;
                var tail=str[str.length-4]+str[str.length-3]+str[str.length-2]+str[str.length-1]
                var str=file.fieldname+result.rows.length+tail;
                id=result.rows.length;
                cb(null,str);
                  console.log('success');
                //}

              }
            });


        }

         });

  }
})
var upload =multer({storage:storage});
require('./config')(app);

/*app.post('/admin/product/add-product', upload.single('images'), function (req, res, next) {

pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
       else{//ket noi thanh cong
        console.log("connect to postgres");
    //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
      //  var query='select * from product' ;
        console.log(query);
        var query="insert into products values("+id+",'"+req.body.categoryName+"','"+req.body.productName+"',"+req.body.price+",'"+req.body.description+"','"+req.body.note+"')"
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
            //}

          }
        });


    }

     });
  //res.send("upload thanh cong");
})*/

//start
var port = 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
