const pg=require("./app/models/connectDB");//goi bien pg ra de ket noi db,bien nay o thu muc models

pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
       else{//ket noi thanh cong
        console.log("connect to postgres");
    //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
        var query='select * from admin';
        console.log(query);
          client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
            done();
          if(err){

            console.log(err);


          }
          else{

            console.log("sucess");

          }
        });


    }

     });
