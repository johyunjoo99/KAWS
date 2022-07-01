$(function(){

//메뉴 슬라이딩
$('.fa-bars').click(function(){
    $('#header_box nav').slideToggle();
});

$(window).resize(function(){
    if(window.innerWidth > 1280){
        $('#big_nav').css('display', 'flex');
    } else {
        $('#big_nav').hide();
    }
});


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
    function slideResize(){
        if(window.matchMedia(" (min-width: 0px) and (max-width: 769px)").matches){

            var fullWidth = $("#work_img").width();
            var halfWidth = fullWidth / 2;
    
            $('.fa-angle-left, .first').click(function(){
                $('#work_img').stop().animate({marginLeft: 0});
                $('.first').css('background-color', '#23222a');
                $('.second').css('background-color', '#cacaca');
            });
    
            $('.fa-angle-right, .second').click(function(){
                $('#work_img').stop().animate({marginLeft: -halfWidth});
                $('.first').css('background-color', '#cacaca');
                $('.second').css('background-color', '#23222a');
            });
    } else if(window.matchMedia("(min-width: 770px) and (max-width: 1280px)").matches){

        var fullWidth = $("#work_img").width();
        var halfWidth = fullWidth / 2;

        $('.fa-angle-left, .first').click(function(){
            $('#work_img').stop().animate({marginLeft: 0});
            $('.first').css('background-color', '#23222a');
            $('.second').css('background-color', '#cacaca');
        });

        $('.fa-angle-right, .second').click(function(){
            $('#work_img').stop().animate({marginLeft: -halfWidth});
            $('.first').css('background-color', '#cacaca');
            $('.second').css('background-color', '#23222a');
        });

    } else{

        var fullWidth = $("#work_img").width();
        var halfWidth = fullWidth / 2;

        $('.fa-angle-left, .first').click(function(){
            $('#work_img').stop().animate({marginLeft: 0});
            $('.first').css('background-color', '#23222a');
            $('.second').css('background-color', '#cacaca');
        });

        $('.fa-angle-right, .second').click(function(){
            $('#work_img').stop().animate({marginLeft: -halfWidth});
            $('.first').css('background-color', '#cacaca');
            $('.second').css('background-color', '#23222a');
        });
        
    }

}

    window.addEventListener("resize", slideResize, false);

    slideResize();


//FAQ 슬라이딩
$('.title').click(function(){
    $(this).siblings().slideToggle();
    $(this).parent().toggleClass('active');    
});


$('#slider_text').css('transform', 'scale(1)').css('opacity', '1');
$('#slider_img').css('transform', 'scale(1)').css('opacity', '1');
$('#x').css('transform', 'scale(1)').css('opacity', '1');
$('#parody').css('transform', 'scale(1)').css('opacity', '1');

});



$(window).scroll(function (){

    //스크롤 시 컨텐츠 block

    var ws = $(this).scrollTop();

    var writer = $('#writer').offset().top;
    if(ws > writer-700){
        $('#writer').css('transform', 'scale(1)').css('opacity', '1');
    } 

    var interview = $('#interview').offset().top;
    if(ws > interview-700){
        $('#interview').css('transform', 'scale(1)').css('opacity', '1');
    }

    var slide = $('.slide').offset().top;

    if(ws > slide-700){
        $('.slide').css('transform', 'scale(1)').css('opacity', '1');
        $('#work_slider i').css('transform', 'scale(1)').css('opacity', '1');
    }

    var workIntroduce = $('#work_introduce').offset().top;

    if(ws > workIntroduce-700){
        $('#other_work').css('transform', 'scale(1)').css('opacity', '1');
    }

    var faq = $('#faq').offset().top;

    if(ws > faq-700){
        $('#faq').css('transform', 'scale(1)').css('opacity', '1');
    }


    
    //스크롤 로드맵
    var line_height = document.getElementById('solid').offsetTop;

    if ((scrollY >= line_height - 600) && (scrollY <= line_height + 200)) {
        roadmap();
    }


    function roadmap() {

        var content_height = document.getElementsByClassName('line')[0].offsetHeight;
        var height = scrollY - (line_height - 600);
        var scrolled = (height / content_height) * 100;
        document.getElementsByClassName('line1')[0].style.height = scrolled + "%";
    }
});




