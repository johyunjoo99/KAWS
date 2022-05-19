// slider 이동
$(function(){
function prev(){
    $(".slider_ul li:last").prependTo('.slider_ul');

    $('.slider_ul').css('margin-left',-1903);
    $('.slider_ul').stop().animate({marginLeft: 0},800);
}

function next(){
    $('.slider_ul').stop().animate({marginLeft: -1903}, function(){

        $('.slider_ul li:first').appendTo('.slider_ul');
        $('.slider_ul').css({marginLeft: 0});
    });
}

function slide(){
    $('.slider_ul').stop().animate({marginLeft: -1903},1000, function(){

        $('.slider_ul li:first').appendTo('.slider_ul');
        $('.slider_ul').css({marginLeft: 0});
    });
}

setInterval(slide, 4000);

$('.fa-chevron-left').click(function(){
    prev();
});

$('.fa-chevron-right').click(function(){
    next();
});


// 줄거리 보기
$('.fa-angle-down').click(function(){
    $('#story_box2').css({height: 580});
    $('.fa-angle-down').css({opacity: 0})
    $('.fa-angle-down').css('transition-delay', '0s')
    $('#story_box').css({height: 680});
});

$('.fa-angle-up').click(function(){
    $('#story_box2').css({height: 270});
    $('#story_box2').css('transition-duration','0.5s');
    $('.fa-angle-down').css({opacity: 1});
    $('.fa-angle-down').css('transition-delay', '0.47s');
    $('#story_box').css({height: 370});           
});

});