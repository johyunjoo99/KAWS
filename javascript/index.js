
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

//팝업 비디오

function openPopup(){
    document.getElementById('myModal').style.display = "block";
}

function closePopup(){
    document.getElementById('myModal').style.display = "none";
}