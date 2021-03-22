$(function(){
// Adjust Slider Height
var winH = $(window).height(),
upperH= $('.upper-bar').innerHeight(),
navH = $('.navbar').innerHeight();
$('.slider, .carousel-item').innerHeight(winH - (upperH + navH));

// Shuffle Images
$(".featured-work ul li").on('click', function(){
    $(this).addClass("active").siblings().removeClass("active");
    if($(this).data('class') === 'all'){
        $('.shuffle-imgs .col-md').css('opacity', 1);
    }else{
        $('.shuffle-imgs .col-md').css('opacity', '0.08');
        $($(this).data('class')).parent().css('opacity', 1);
    }
});
});