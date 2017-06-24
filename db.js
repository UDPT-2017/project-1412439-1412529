const pg=require("./app/models/connectDB");//goi bien pg ra de ket noi db,bien nay o thu muc models

pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
      if(err){

         console.log(err);
       }
       else{//ket noi thanh cong
        console.log("connect to postgres");
        var query='drop table products';
    //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
      //  var query='CREATE TABLE products (id integer primary key NOT NULL,category character(100) NOT NULL,  name character(100) NOT NULL,  price integer NOT NULL,description character(200) not null,note character(200))' ;
      //var query='ALTER TABLE  transaction  drop CONSTRAINT transaction_user_pkey';
      //var query='CREATE TABLE client (fullname character varying(128) NOT NULL,email character varying(50),username character varying(50) primary key,password character varying(32) NOT NULL,phone character varying(15) NOT NULL)'
      var query="insert into admin values(0,'bachthong','0905865911','thong')";
      //var query='drop table client';
        console.log(query);
          client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
            done();
          if(err){

            console.log(err);


          }
          else{

            //for(var i=0;i<result.rows.length;i++){
              console.log('success');
            //}

          }
        });


    }

     });
