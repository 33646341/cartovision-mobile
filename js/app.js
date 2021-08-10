
$(function () {
    $("#menu").click(function () {
        $(".cbl").css("left", 0)
    })
    $(".cbl").click(function () {
        $(".cbl").css("left", "-750px")
    })
    $('.home').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.about').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Work').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Structure').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Sign').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
})





































