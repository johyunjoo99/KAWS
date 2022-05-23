$(function(){


// 메인 슬라이더
var i=0;

function slide(){
    i++;
    if(i > $('.slider_slide li:last').index()){
        i=0;
    }
    $('.slider_slide li').eq(i).stop().show();
    $('.slider_slide li').eq(i-1).stop().hide();
}

setInterval(slide, 300);


// 팝업 비디오
$('.fa-play').click(function(){
    $('#myModal').fadeIn(250);
});

$('.fa-xmark').click(function(){
    $('#myModal').fadeOut(250);
});


// 작품 슬라이드
$('.fa-angle-left').click(function(){
    $('#work_img').animate({marginLeft: 0});
    $('.first').css('background-color', '#23222a');
    $('.second').css('background-color', '#cacaca');
});

$('.fa-angle-right').click(function(){
    $('#work_img').animate({marginLeft: -1058});
    $('.first').css('background-color', '#cacaca');
    $('.second').css('background-color', '#23222a');
});

$('.first').click(function(){
    $('#work_img').animate({marginLeft: 0});
    $('.first').css('background-color', '#23222a');
    $('.second').css('background-color', '#cacaca'); 
});

$('.second').click(function(){
    $('#work_img').animate({marginLeft: -1058});
    $('.first').css('background-color', '#cacaca');
    $('.second').css('background-color', '#23222a');
});


//스크롤 로드맵



//FAQ 슬라이딩

});
