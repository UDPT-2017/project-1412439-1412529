const pg=require("./connectDB");
var signupModels={
  signup_form:function(req,res){
//console.log(req.body.user_name);
//console.log(req.body.password);
//res.send("1");

//res.send("1");
//console.log(query);


//  res.send("GG");
  pg.connect(function(err, client,done) {//ket noi db.cac cau lenh truy van duoc dat trong ham connect
          if(err){
            res.send("khong ket noi duoc co so du lieu");
             console.log(err);
           }
           else{//ket noi thanh cong
            console.log("connect to postgres");
            var flag1=false;
            var flag2=false;
        //    var query="update messages set message='{"+'"'+req.body.data+'","'+req.body.time1+'","'+req.body.time2+'","'+req.body.status+'"'+"}'"+" where user1='"+req.body.user+"' and user2='"+req.session.user+"' and message[2]='"+req.body.time1+"'";
            //var query="insert into client values('"+req.body.full_name+"','"+req.body.email+"','"+req.body.user_name+"','"+req.body.password+"','"+req.body.phone+"')" ;
               var query="select * from client where client.username='"+req.body.user_name+"' and client.password='"+req.body.password+"'";
              console.log(query);
              client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                done();
              if(err){

                console.log(err);
                res.send("loi truy van");


              }
              else{
                console.log(result.rows.length);
                if(result.rows.length>0){
                  req.session.user=req.body.user_name;
                  //flag1=true;
                  req.app.locals.user=true;
                  res.render('user/index', {
                      title: 'Home',
                      message: '',
                  });
              }
              else{
                ///////////////////////////////////////////////////////
                var query="select * from admin where admin.username='"+req.body.user_name+"' and admin.password='"+req.body.password+"'";
               console.log(query);
               client.query(query, function (err, result) {//truy van,neu co ket qua se tra ve trong bien result
                 done();
               if(err){

                 console.log(err);
                 res.send("loi truy van");


               }
               else{
                 console.log(result.rows.length);
                 if(result.rows.length>0){
                   //flag2=true;
                 req.app.locals.user=true;
                 req.session.user=req.body.user_name;
                 req.session.admin=true;
                 res.render('admin/homeAdmin', {
                     title: 'Admin Pages',
                     layout: 'layout_admin',
                 });
               }
               else{
                res.send("tai khoan hoac mat khau khong chinh xac");
               }
             }
             });
                //res.send("tai khoan hoac mat khau khong chinh xac");
              }
            }
            });


        }

      });

}
}

module.exports = signupModels;
