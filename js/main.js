$(document).ready(function() {

    var $chevUp = $("#chevUp");
    var $about = $("#fe-header");

    $(".toTop").click(function(e) {
        // smoothly scroll to top
        $("body, html").animate({
            "scrollTop": "0px"
        }, 1200);
        e.preventDefault();
        return false;
    });

    $(".toRfp").click(function(e) {
        // smoothly scroll to top
        $("body, html").animate({
            "scrollTop": $rfp.offset().top + "px"
        }, 1200);
        e.preventDefault();
        return false;
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= $about.offset().top - 10) {
            $chevUp.addClass("active");
        } else {
            $chevUp.removeClass("active");
        }
    });
});