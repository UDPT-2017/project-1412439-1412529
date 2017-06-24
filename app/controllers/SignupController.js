var model=require("../models");
var signupController = {

    signup: function (req, res) {
      if(req.session&&req.session.user){
        res.send("Bạn đã đăng nhập");
      }
      else{
        res.render('user/signup', {
            title: 'Signup',
            message: '',
        }

        );
      }
    },
    signup_form:function(req,res){
      model.signup.signup_form(req,res);
    },
}

module.exports = signupController;
