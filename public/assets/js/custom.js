

function showImage(image, show, nameInput) {
    var input = document.getElementById(image);
    var list = document.getElementById(show);

    //empty list for now...
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    //for every file...
    for (var x = 0; x < input.files.length; x++) {
        //add to list
        var li = document.createElement('li');
        var inputHiden = document.createElement("input");
        inputHiden.setAttribute("type", "hidden");
        inputHiden.setAttribute("name", nameInput);
        inputHiden.setAttribute("value", input.files[x].name);
        li.append(inputHiden);
        list.append(li);
    }
}





$(document).ready(function() {
    //Delete product
    $('#delete_product').keyup(function(){
      var productName = $('#productName').text();
      if($(this).val() == productName)
      {
        $('#btn_delete').prop('disabled',false);
      }
      else{
        $('#btn_delete').prop('disabled',true);
      }
    });
    //End delete product

    //validate add Form
    $('#add-product-form').submit(function(){
      var productName = $(this).find('input[name="productName"]').val();
      if(productName.trim().length < 4 || productName.trim().length > 50 ){
        $('#msg').addClass('warning');
        $('#msg').text("Bạn phải nhập ít nhất 4 ký tự ở trường Tên Giày");
        return false;
      }
      $('#msg').removeClass('warning');
    });

    $('#number-field').keyup(function(){
      var number = parseInt($(this).val());
      $(".more-div").remove();
      for(var i = 0; i < number; i++){
        $('#add-category-form').append(
          "<div class='form-group more-div'><label>Danh mục con</label><input type='text' name='subCategory' class='form-control' required/></div>");
      }
      
    });
});


$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
