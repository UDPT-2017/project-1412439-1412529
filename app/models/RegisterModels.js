const pg=require("./connectDB");
var registerModels={
  register_form:function(req,res){
console.log(req.body.user_name);
console.log(req.body.password);
//res.send("1");

//res.send("1");
//console.log(query);
   pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){
            res.send("0");
             console.log(err);
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            var query="insert into client values('"+req.body.full_name+"','"+req.body.email+"','"+req.body.user_name+"','"+req.body.password+"','"+req.body.phone+"')" ;
            console.log(query);
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


        }

      });
  }
}

module.exports = registerModels;
