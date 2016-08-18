// JavaScript Document
$(function(){

	function user_show(){
		var width = $("body").width(),
	        height = $(window).height(),
		    top_height = $(".top").height(),

			wh = width*45/100;
		    ht = height-top_height;
		    right_wh = width*55/100;
	        
			$(".user").css({
			    width:wh,
			    height:ht
		    });
		    $(".user_left").css({
			    width:right_wh,
			    height:ht
		    });
			
		    //$(".menu").css("height",ht);
			//动画部分，让遮罩左右显示 然后从右侧移出
			$(".user_left").css("display","block").animate({right:'45%'},"100");
		    $(".user").css("display","block").animate({right:'0'},"100");
		    
	}
	//主页菜单动画关闭
	function menu_closed(){
		$(".fullbg").animate(
		    {left:'-45%'},
			"100",
			function(){
				$(".fullbg").css("display","none").css("left","-45%");
			}
		);
		$(".fullbg_right").animate(
		    {left:'-55%'},
			"100",
			function(){
				$(".fullbg_right").css("display","none");
			}
		);
	}
	//用户菜单动画关闭
	function user_closed(){
		$(".user_left").animate(
		    {right:'-55%'},
			"100",
			function(){
			    $(".user_left").css("display","none");
			}
		);
		$(".user").animate(
		    {right:'-45%'},
			"100",
			function(){
			    $(".user").css("display","none");
			}	
		);
	}

	//绑定touchstart事件 执行动画显示function和动画关闭
	
	$(".home_user").on("touchstart",function(){
		if($(this).hasClass("user_checked")){
			user_closed();
			$(this).removeClass("user_checked");
		}else{
			user_show();
			$(this).addClass("user_checked");
		}		
	});	


})