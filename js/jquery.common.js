function scrHndl(){
    var ww = $(window).innerWidth();
    var wh = $(window).innerHeight();
    var nvh = $("#headIn").outerHeight();
    var srl = $(window).scrollLeft();
    var srt = $(window).scrollTop();
    var hd = nvh - wh;
    var topicsH = $("#topics").offset().top;
    var footH = topicsH - 458;
    var scH = footH - wh;

    if(hd > 0){
        if(srt < hd){
            $("#headIn").css({"position":"fixed","top":-(srt)+"px","bottom":"auto","width":"16.6%"});
        }else if(srt > scH){
            $("#headIn").css({"position":"absolute","top":"auto","bottom":"0","width":"100%"});
        }else{
            $("#headIn").css({"position":"fixed","top":-(hd)+"px","bottom":"auto","width":"16.6%"});
        }
    }else{
        if(srt > scH - hd){
            $("#headIn").css({"position":"absolute","top":"auto","bottom":"0","width":"100%"});
        }else{
            $("#headIn").css({"position":"fixed","top":"0","bottom":"auto","width":"16.6%"});
        }
    }
    
    if(ww < 1200){
        $("#headIn").css({"left":-(srl)+"px"});
    }else{
       $("#headIn").css({"left":"0px"}); 
    }
}
$(function(){
    //TEXT WRAP SPAN
	var textbox = document.querySelectorAll('#navList a');
	
	for(i=0;i<textbox.length;i++){
	var text = textbox[i].textContent;

	textbox[i].innerHTML = '';

	text.split('').forEach(function (c) {
		textbox[i].innerHTML += '<span>'+c+'</span>';
	});
	}
	//ANCHOR SMOOTH SCROLL
	$('.anchor').click(function() {
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');
		return false;
	});
    
    //MODAL YOUTUBE
    var scrNow = 0;
    var ytID = $("#toMovie a").data('yt');
	//$("#toMovie a").css({"background-image":"url(images/pv_thumb.jpg)"});
	$(".movieModal").click(function(e) {
		scrNow = $(window).scrollTop();
		var ytID = $(this).data('yt');
		var ytURL = 'https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0';
		$("#movieModal iframe").attr("src",ytURL);
		$("#movieModal").fadeIn(500,'linear',function(){
			$("#fullWrap").css({"overflow":"hidden","left":"-1px","top":"-1px","width":"1px","height":"1px","opacity":"0"});
			$("#movieModal").css({"overflow-y":"scroll"});
		});
	});
    
    //MODAL CLOSE
    $(".modalClose a").click(function(e) {
		$("#fullWrap").attr('style','');
		$("#movieModal").css({"overflow-y":"auto"});
		$("body,html").animate({scrollTop:scrNow},10,'linear',function(){
			$(".modal").fadeOut(500);
			$(".modal iframe").attr('src','');
		});
	});
    
    $(window).on("load",function(){
		if($("#topics li").length > 1){
		var owl = $("#topics ul");
		owl.owlCarousel({
			items:1,
			loop:true,
			mouseDrag:false,
			dots:false,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			smartSpeed:500
		});
	   }
	});
    $(window).on("load scroll resize",scrHndl);
});