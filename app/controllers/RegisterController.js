var model=require("../models");
var registerController = {

    register: function (req, res) {
        res.render('user/register', {
            title: 'Register',
            message: '',
        }

        );
    },
    register_form:function(req,res){
      model.register.register_form(req,res);
    },
    logout:function(req,res){
      console.log(req.session);

       req.session.destroy();
       req.app.locals.user=false;
      // res.send("gg");
      // res.render('user/signup');
    }
}

module.exports = registerController;
