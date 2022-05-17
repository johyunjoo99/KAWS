
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

