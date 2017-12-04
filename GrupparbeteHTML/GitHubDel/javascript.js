
$(document).ready(function () {

    var info = false;
    var formData= {
        förnamn:"",
        efternamn:"",
        adress:"",
        postkod:"",
        ort:"",
        land:"",
        mejl:"",
        telefon:"",
        betalsätt:"",
        fraktsätt:""
    };

    $('.moreInfo').on('click', function () {
        $(this).closest('.productPictureSize').find('.description').slideToggle(0);

        if ($(this).hasClass('.seperate')) {
            $(this).text('Mer info');
        }
        else {
            $(this).text('Mini');
        }
        $(this).toggleClass('.seperate');
        $(this).closest('.flexBoxImage').find('.productPictureSize').toggleClass('expandInfo');
    });
    $('.comment').on('click', function () {

       $(this).closest('.productPictureSize').find('.commentSection').slideToggle(0);
        $(this).closest('.flexBoxImage').find('.productPictureSize').toggleClass('expandInfo');

    });
    $('.leaveComment').on('click', function () {
        if(localStorage.addComment){
            localStorage.addComment=localStorage.addComment+$(this).closest('.commentSection').find('.commentText').val();
        }
        else{
            localStorage.addComment=$(this).closest('.commentSection').find('.commentText').val();
        }
        $(this).closest('.commentSection').find('.costumerComments').text(localStorage.addComment);

    });
    $('.delete').on('click', function () {
        $(this).closest('.product').addClass('hide');


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
        sessionStorage.setItem("name","Lidia");
        console.log(sessionStorage.getItem("name"));
        showData();
    });
    function showData() {
        $("#control").empty();
        $(".kolumn").hide();

        $("#control").append("<li><h3>Tack för din bestälning!</h3></li>");
        for (var key in formData) {
            if (formData.hasOwnProperty(key)) {

                var linkElem=$("<li></li>")
                    .text(key+": "+formData[key]);
                $("#control").append(linkElem);
            }
        }
    }
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





