var Router = require('express').Router;
var controllers = require('../app/controllers');
var upload=require('../app/models/Upload');
var session = require('express-session');
///////////////////////////////////////////////
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Authentication and Authorization Middleware
var admin= function(req, res, next) {
  console.log(req.session.user+req.session.admin);
if (req.session && req.session.user && req.session.admin)
{
console.log(req.session.user+req.session.admin);
return next();
}
else
return res.send("Chỉ admin mới có quyền truy cập trang này");
};
var client=function(req,res,next){
//console.log(req.app.locals);
  if (req.session && req.session.user)
  {
//req.app.locals.user=req.session.user;
  return next();
}
else{
  return next();
}


}

module.exports = function (app) {
  app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
  }));
  var homeRoutes = Router()
      .get('/',client,controllers.home.index)
      .get('/home',client,controllers.home.home)
      .get('/index',client,controllers.home.index)

  var signupRouters = Router()
      .get('/signup',client,controllers.signup.signup)
      .post('/signup_form',client,urlencodedParser,controllers.signup.signup_form)

  var registerRouters = Router()
      .get('/register',client,controllers.register.register)
      .post('/register_form',client,jsonParser,controllers.register.register_form)
      .post('/logout',client,controllers.register.logout)
  var contactRouters =  Router()
      .get('/contact',client,controllers.contact.contact)

  var checkoutRouters = Router()
      .get('/checkout',client,controllers.checkout.checkout)

  var productsRouters = Router()
      .get('/products',client,controllers.products.products)

  var singleRouters = Router()
      .get('/single',client,controllers.single.single)

  var homeAdminRouters = Router()
      .get('/admin',admin,controllers.homeAdmin.homeAdmin)

  var listproductsRouters = Router()
      .get('/admin/product/list-product',admin, controllers.listproducts.listproducts)

  var addproductsRouters = Router()
      .get('/admin/product/add-product',admin,controllers.addproducts.addproducts)
      .post('/admin/product/add-product',admin,upload.single('images'),controllers.addproducts.addproducts_post)
    var searchproductRouters = Router()
        .get('/admin/product/search',admin,controllers.search.search)
    var updateProductRouters = Router()
        .get('/admin/product/update-product',admin,controllers.update.update)


    app.use('/', homeRoutes);
    app.use('/', signupRouters);
    app.use('/', registerRouters);
    app.use('/', contactRouters);
    app.use('/', checkoutRouters);
    app.use('/', productsRouters);
    app.use('/', singleRouters);
    app.use('/', homeAdminRouters);
    app.use('/', listproductsRouters);
    app.use('/', addproductsRouters);
    app.use('/', searchproductRouters);
    app.use('/', updateProductRouters);

}
