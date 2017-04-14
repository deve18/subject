$(function(){
	// menu/nav.change
	$(".menu").on("click",function(){
		if($(this).hasClass("h")){
			$(this).removeClass("h");
		} else {
			$(this).addClass("h");
		}
	})
	$(".nav").on("click",function(){
		if($(".menu").hasClass("h")){
			$(".menu").removeClass("h");
		} else {
			$(".menu").addClass("h");
		}
	})

	$(window).on("scroll",function(){
		$(".menu").addClass("h");
	})

	//nav function & back to top function
	var nums1 = $(".cons1").height();
	var nums2 = nums1+$(".cons2").height();
	var nums3 = nums2+$(".cons3").height()+$(".cons4").height();
	var nums4 = nums3+$(".cons5").height();

	$("#cons0").on("click",function(){
		scroll(0);
	})
	$("#cons1,#cons2,#cons3").on("click",function(){
		scroll(nums1);
	})
	$("#cons4").on("click",function(){
		scroll(nums2);
	})
	$("#cons5").on("click",function(){
		scroll(nums3);
	})
	$("#cons6").on("click",function(){
		scroll(nums4);
	})
	$(".top1").on("click",function(){
		scroll(0);
	})
	function scroll(b){
		$("body").stop(true).animate({"scrollTop": b},1000);
	}


	// back to top  &  scroll.function >> fade
	$(".visib1").fadeIn(2000);
	$(window).on("scroll",function(){
		var w_h = $(window).scrollTop();
		if(w_h>0){
			$(".top1").show();
		}else{
			$(".top1").hide();
		}

		if(w_h>700 && w_h<=1400){
			$(".con1-w").fadeIn(2000);
			$(".list").fadeIn(2000);
		}else if(w_h>1400 && w_h<=2650){
			$(".list2").fadeIn(2000);
		}else if(w_h>2650 && w_h<=3400){
			$(".visib2").fadeIn(2000);
		}else if(w_h>3400){
			$(".con6-w,.adress").fadeIn(2000);
		}
	})
})


// baidu share
window._bd_share_config={
	"common":{
		"bdSnsKey":{},
		"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"
		},
	"share":{},
	"image":{
		"viewList":["qzone","tsina","tqq","renren","weixin"],
		"viewText":"分享到：","viewSize":"16"
		},
	"selectShare":{
		"bdContainerClass":null,
		"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src=
	'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
