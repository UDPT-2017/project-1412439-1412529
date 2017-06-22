var Router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function (app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index)
        .get('/home', controllers.home.home)
        .get('/index', controllers.home.index)

    var signupRouters = Router()
        .get('/signup', controllers.signup.signup)
    
    var registerRouters = Router()
        .get('/register', controllers.register.register)

    var contactRouters =  Router()
        .get('/contact', controllers.contact.contact)
    
    var checkoutRouters = Router()
        .get('/checkout', controllers.checkout.checkout)

    var productsRouters = Router()
        .get('/products', controllers.products.products)
    
    var singleRouters = Router()
        .get('/single', controllers.single.single)


    app.use('/', homeRoutes);
    app.use('/', signupRouters);
    app.use('/',registerRouters);
    app.use('/', contactRouters);
    app.use('/', checkoutRouters);
    app.use('/', productsRouters);
    app.use('/', singleRouters);

}