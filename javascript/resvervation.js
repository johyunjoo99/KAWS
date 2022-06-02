$(function(){

    // 예약 마감시간까지 카운트다운
    var time = new Date();
    var countDownDate = new Date(time.getFullYear(), time.getMonth(), time.getDay(), 18, 00, 00).getTime();

    var x = setInterval(function(){
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
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
        alert("The alarm settings are complete. <br>" + 
              "The alarm will sound one hour before the start/end of the reservation.");
    });

    $(".icon .fa-solid").mousedown(function(){
        $(".icon .fa-solid").css("transform", "scale(0.9)");
    });

    $(".icon .fa-solid").mouseup(function(){
        $(".icon .fa-solid").css("transform", "scale(1)");
        alert("The alarm settings have been canceled.");
    });

    $(".icon .fa-regular").click(function(){
        $(this).hide();
        $(this).next().show();
    });

    $(".icon .fa-solid").click(function(){
        $(this).hide();
        $(this).prev().show();
    });
});