function deleteItem(id, divDel) {
    $.ajax({
        url: "/delete-item",
        method: "POST",
        data: { id: id },
        success: function (data) {
            $('.' + divDel).fadeOut('slow', function (c) {
                $('.' + divDel).remove();
            });
        }
    });
}



$(document).ready(function () {
    $("#comment-btn").click(function () {
        $('#comment-message').empty();
        var username = $('#username').val();
        var productId = $('#productId').val();
        var comment = $('#comment-content').val();
        if (username.length < 2) {
            $('#comment-message').append("<p class='warning'>Your name have at least 2 characters</p>");
            return;
        }
        if (comment.length < 10) {
            $('#comment-message').append("<p class='warning'>Your name have at least 10 characters</p>");
            return;
        }

        $.ajax({
            url: "/add-comment",
            method: "POST",
            data: { username: username, productId: productId, comment: comment },
            success: function (data) {
                $('#wrapper-comment').prepend(
                    '<div class="comment-box" id="' + data._id + '"><div class="row"><div class="col-md-1"><img src="/uploads/comment.png" width="55"></div><div class="col-md-7">'
                    + '<span class="comment-user">' + data.username + '</span><br><p class="comment-content">' +
                    data.comment + '</p></div></div></div>').hide().fadeIn(500);
            }
        });

    });

    $("#load").click(function () {
        

    });

    

});