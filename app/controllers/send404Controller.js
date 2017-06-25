var send404Controller = {

    send404: function (req, res) {
        res.render('user/404', {
            title: '404 error',
            layout: 'layout_error' 
        }

        );
    }
}

module.exports = send404Controller;