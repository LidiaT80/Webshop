
$(document).ready(function () {

    $('.moreInfo').on('click', function () {
        $(this).closest('.productPictureSize').find('.description').slideToggle(0);

        if ($(this).hasClass('.seperate')) {
            $(this).text('Mer info');
        }
        else {
            $(this).text('Mini');
        }
        $(this).toggleClass('.seperate');

    });

    $('.comment').on('click', function () {
        $(this).closest('.productPictureSize').find('.costumerComments').empty();
        $(this).closest('.productPictureSize').find('.commentSection').slideToggle(0);
        $(this).closest('.flexBoxImage').find('.productPictureSize').toggleClass('expandInfo');
        var savedComments=JSON.parse(localStorage.getItem('comment'));

        for(var i=0;i<savedComments.length;i++){
            $(this).closest('.productPictureSize').find('.costumerComments').append('<p>'+ savedComments[i]+'</p>');
        }

    });

    $('.leaveComment').on('click', function () {

        var newComment=$(this).closest('.commentSection').find('.commentText').val();
        if(localStorage.getItem('comment')){
        comments=JSON.parse(localStorage.getItem('comment'));
        }
        comments.push(newComment);
        localStorage.setItem('comment', JSON.stringify(comments));
        $(this).closest('.commentSection').find('.costumerComments').append('<p>'+ newComment+'</p>');
        $(this).closest('.commentSection').find('.commentText').val(" ");
    });

    $('#productTable').on('click','.delete', function () {
        $(this).closest('.product').addClass('hide');
        $(this).closest('#productTable').find('#reset').show();
        var newPrice=Number(localStorage.getItem('totalPrice'))-Number($(this).closest('.product').find('.totalProduct').text());
        $('#totalPrice').text(newPrice);
        localStorage.setItem('totalPrice',newPrice);

    });

    $("#submit").on("click", function (){
        formData.förnamn=$("#firstName").val();
        formData.efternamn=$("#lastName").val();
        formData.adress=$("#adress").val();
        formData.postkod=$("#zipCode").val();
        formData.ort=$("#city").val();
        formData.land=$("#country").val();
        formData.mejl=$("#email").val();
        formData.telefon=$("#phone").val();
        formData.betalsätt=$("input[name=betalning]:checked").val();
        formData.fraktsätt=$("input[name=frakt]:checked").val();
        var toPay=Number(localStorage.getItem('totalPrice'))+Number($(this).closest('.kolumn').find('input[name=frakt]:checked').data('price'));

        showData(toPay);
    });
    function showData(toPay) {
        $("#control").empty();
        $(".kolumn").hide();

        $("#control").append("<li><h3>Tack för din bestälning!</h3></li>");
        $("#control").append("<li><b>Att betala:<span >"+toPay+"</span>kr</b></li>");
        for (var key in formData) {
            if (formData.hasOwnProperty(key)) {

                var linkElem=$("<li></li>")
                    .text(key+": "+formData[key]);
                $("#control").append(linkElem);
            }
        }
    }


    $('#productTable').on('keyup','.amount', function () {
        var totalProductPrice=Number($(this).closest('.product').find('.price').data('price'))*$(this).val();

        $(this).closest('.product').find('.totalProduct').text(totalProductPrice);
        var totalPrice=Number($('#totalProduct1').text())+Number($('#totalProduct2').text());
        $('#totalPrice').text(totalPrice);
        localStorage.setItem('totalPrice',totalPrice);

    });
    $('#productTable').on('click','#resetButton', function () {
        $(this).closest('#productTable').find('.product').removeClass('hide');
        $(this).closest('#reset').hide();
        var totalPrice=Number($('#totalProduct1').text())+Number($('#totalProduct2').text());
        $('#totalPrice').text(totalPrice);
        localStorage.setItem('totalPrice',totalPrice);

    });


});
















///////////////////////////////SEVERAL PAGES///////////////////////////////////////
/*var gameState;

if (!gameState) {
    // no state was saved or loading failed, start from beginning
    gameState = {
        currentPage: 'beginning'
    };
}

function drawPage() {
    var page = pages[gameState.currentPage];
    $("#page h2").text(page.title);
    $("#page img").attr("src", page.imgUrl);
    $("#bread").html(page.bread);
    $("#page ul").empty(); //Remove all child nodes of the set of matched elements from the DOM.
    page.options.forEach(function (link, n) { //The forEach() method calls a provided function once for each element in an array, in order.
        var linkElem = $("<li></li>")
            .text(link.text)
            // ".attr" Get sthe value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element
            .attr("data-optNbr", n); // store link index for use in click handler
        $("#page ul").append(linkElem); //".append" Insert content, specified by the parameter, to the end of each element in the set of matched elements.
    });
}

// Event delegation, catch clicks on all future `li` inside `#page ul`
$("#page ul").on("click", "li", function (e) {
    var optNbr = $(e.target).attr("data-optNbr"); // option index, was stored in drawPage
    var page = pages[gameState.currentPage];
    var optionData = page.options[optNbr];
    var target = optionData.to;
    gameState.currentPage = target;

    drawPage();
});

drawPage();

///////////////////////////////SEVERAL PAGES///////////////////////////////////////






*/





