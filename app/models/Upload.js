var multer=require('multer');
const pg=require("./connectDB");
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
            var query='select * from products order by products.id' ;
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
                var x;
                if(result.rows.length>0)
                x=result.rows[result.rows.length-1].id+1;
                else {
                  x=0;
                }
                var str=file.fieldname+x+tail;
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

const upload =multer({storage:storage});
module.exports=upload;
