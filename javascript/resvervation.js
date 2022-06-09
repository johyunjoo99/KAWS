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

    // 예약 마감시간까지 카운트다운
    var timer = new Date();
    var countDown = new Date(timer.getFullYear(), timer.getMonth(), timer.getDate(), 18, 00, 00);

    var x = setInterval(function(){
        var now = new Date().getTime();

        var distance = countDown - now;

        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance %(1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

        if(hours<10){hours = "0" + hours};
        if(minutes<10){minutes = "0" + minutes};
        if(seconds<10){seconds = "0" + seconds};

        document.getElementById("time").innerHTML = hours + " : " + minutes + " : " + seconds;

        if(distance < 0){
            clearInterval(x);
            document.getElementById("time").innerHTML = "00 : 00 : 00";
        }
    }, 1000);


    // 예약 알림 설정 
    $(".icon .fa-regular").mousedown(function(){
        $(".icon .fa-regular").css("transform", "scale(0.9)");
    });

    $(".icon .fa-regular").mouseup(function(){
        $(".icon .fa-regular").css("transform", "scale(1)");
        $(this).hide();
        $(this).next().show();

        setTimeout(function(){
            alert("The alarm settings are complete." + "\n" + 
              "The alarm will sound 1 hour before the start / end of the reservation.");
        }, 100);
        
    });

    $(".icon .fa-solid").mousedown(function(){
        $(".icon .fa-solid").css("transform", "scale(0.9)");
    });

    $(".icon .fa-solid").mouseup(function(){
        $(".icon .fa-solid").css("transform", "scale(1)");
        $(this).hide();
        $(this).prev().show();

        setTimeout(function(){
            alert("The alarm settings have been canceled.");
        }, 100);

    });


    //예약 완료
    $("form input[type='submit']").mousedown(function(){
        $(this).css("transform", "scale(0.95)");
    });

    $("form input[type='submit']").mouseup(function(){
        $(this).css("transform", "scale(1)");

        setTimeout(function(){
            alert("Your reservation has been made.");
        });
    });


    // 다른 제품 슬라이드

    function slideResize(){
        var page = 0;

        if ( window.matchMedia('(min-width: 0px) and (max-width: 769px)').matches ) {
            
            var fullWidth = $("#other_img").width();
            var slideWidth = fullWidth / 6;

            $(".fa-angle-right").click(function(){
        
                page++;
        
                $("#other_img").stop().animate({marginLeft: -slideWidth * page});
        
                if(page > 5){
            
                    $("#other_img").stop().animate({marginLeft: 0});

                }
            });
        
            $(".fa-angle-left").click(function(){
        
                page--;
        
                $("#other_img").stop().animate({marginLeft: -slideWidth * page});
        
                if(page < 0){
                    
        
                    $("#other_img").stop().animate({marginLeft: 0});
                    
                    page = 0;
                }
            });

        } else if ( window.matchMedia('(min-width: 770px) and (max-width: 1280px)').matches ) {

            var fullWidth = $("#other_img").width();
            var slideWidth = fullWidth / 6;

            $(".fa-angle-right").click(function(){
        
                page++;
        
                $("#other_img").stop().animate({marginLeft: -slideWidth * page});
        
                if(page > 5){
            
                    $("#other_img").stop().animate({marginLeft: 0});
                }
            });
        
            $(".fa-angle-left").click(function(){
        
                page--;
        
                $("#other_img").stop().animate({marginLeft: -slideWidth * page});
        
                if(page < 0){
                    page = 0;
        
                    $("#other_img").stop().animate({marginLeft: 0});
                }
            });
        } else {
            $(".fa-angle-right").click(function(){
        
                page++;
        
                $("#other_img").stop().animate({marginLeft: -384 * page});
        
                if(page > 5){
            
                    $("#other_img").stop().animate({marginLeft: 0});

                } 
            });
        
            $(".fa-angle-left").click(function(){
        
                page--;
        
                $("#other_img").stop().animate({marginLeft: -384 * page});
        
                if(page < 0){

                    page = 0;
        
                    $("#other_img").stop().animate({marginLeft: 0});
                }
            });
        }
    }

    window.addEventListener('resize', slideResize, false);

    slideResize();

    // 영역 나타나는 효과

    $("#slider_container").css('transform', 'scale(1)').css('opacity', '1');

    $(window).scroll(function(){
        var ws = $(this).scrollTop();

        var form = $("#form_info").offset().top;
        if(ws > form-700){
            $("#form_info").css('transform', 'scale(1)').css('opacity', '1');
        }
    });

});