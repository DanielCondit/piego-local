$(document).ready(function() {

    // Global script

    $('div>a[id$="Container"]').click(function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('.contentWrap').load(href);
        return false;
    });

    $('.scriptLink>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
        $('.scriptLink>a').removeClass("active");
        $(this).addClass("active");
        if ($('.scriptLink>a').hasClass('active')) {
            $('.smallLogo').css("display", "block");
        }
    });

    // Scripts for partners page

    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 5000);
    }

});