$(function(){
    //PARALLAX
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    
    //LOADING
    $(window).on("load",function(){
        $("#loading").delay(2000).fadeOut(1000,"linear",function(){
            $(".movieModal").click();
        });
    });
});