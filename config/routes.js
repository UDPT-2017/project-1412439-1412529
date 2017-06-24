var Router = require('express').Router;
var controllers = require('../app/controllers');
var upload=require('../app/models/Upload');
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

    var homeAdminRouters = Router()
        .get('/admin', controllers.homeAdmin.homeAdmin)

    var listproductsRouters = Router()
        .get('/admin/product/list-product', controllers.listproducts.listproducts)

    var addproductsRouters = Router()
        .get('/admin/product/add-product', controllers.addproducts.addproducts)
        .post('/admin/product/add-product',upload.single('images'),controllers.addproducts.addproducts_post)
    var searchproductRouters = Router()
        .get('/admin/product/search', controllers.search.search)


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

}
