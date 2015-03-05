$(document).ready(function() {

    $finalists = $(".finalists").children();
    $(".finalists").html(shuffle($finalists));

    var i = 0;
    $fItems = $(".finalist");
    var timer = setInterval(function() {

        if (i < 5) {
            $($fItems[i]).animate({
                opacity: 1
            }, 500);
            i++;
        } else {
            clearInterval(timer);
        }

        },300);
});

function shuffle(o){ //v1.0
    // http://stackoverflow.com/a/6274381/4013322
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};