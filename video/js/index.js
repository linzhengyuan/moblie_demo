// JavaScript Document
	function flash(){
		var so = new SWFObject("swf/CuPlayerMiniV3_Black_S.swf","CuPlayer","960","540","9","#000000");
		so.addParam("allowfullscreen","true");
		so.addVariable("enablecontextmenu","false");
		so.addParam("allowscriptaccess","always");
	
		so.addParam("wmode","opaque");
		so.addParam("quality","high");
		so.addParam("salign","lt");
		so.addVariable("CuPlayerFile","../test.mp4");
		so.addVariable("CuPlayerShowImage","true");
		so.addVariable("CuPlayerWidth","960");
		so.addVariable("CuPlayerHeight","540");
		so.addVariable("CuPlayerAutoPlay","true");
		so.addVariable("CuPlayerAutoRepeat","true");
		so.addVariable("CuPlayerShowControl","true");
		so.addVariable("CuPlayerAutoHideControl","false");
		so.addVariable("CuPlayerAutoHideTime","6");
		so.addVariable("CuPlayerVolume","80");
		so.addVariable("CuPlayerGetNext","false");
	
		so.write("CuPlayer");	
	}
	if(IsPC()){
		if(!!document.createElement('video').canPlayType){
			$("#video").show();
			$(".pc").addClass("check");
			$(".version").text('当前版本：PC端html5版');
		}else{
			flash();
			$(".flash").addClass("check");
			$(".version").text('当前版本：PC端Flash版');
		}
	}else{
		$(".mobile").addClass("check");
		$(".version").text('当前版本：移动端版').addClass("version-mobile");
		$(".header ul").addClass("ul-mobile");
		$(".header ul li").addClass("li-mobile");
		$("#player").addClass("player-mobile");
	}
    
	function IsPC()  
    {  
	   var userAgentInfo = navigator.userAgent;  
	   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	   var flag = true;  
	   for (var v = 0; v < Agents.length; v++) {  
		   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	   }  
	   return flag;  
    }            

	function change(){
		$(".pc").on('click',function(){
			if(IsPC()){
				if(!!document.createElement('video').canPlayType){
					$(this).siblings().removeClass('check');
					$(this).addClass('check');
					$("#CuPlayer").hide();
					$("#video").show();
					$("#player")[0].currentTime = 0;
					$("#player")[0].play();
					$(".version").text('当前版本：PC端html5版');
				}else{
					alert('当前浏览器不支持html5视频播放');
					return false;
				}
			}else{				
				alert('当前处于移动端环境');
				return false;
			}
		})
		$(".mobile").on('click',function(){
			if(!!document.createElement('video').canPlayType){
				$(this).siblings().removeClass('check');
				$(this).addClass('check');
				$("#CuPlayer").hide();
				$("#video").show();
				$("#player")[0].currentTime = 0;
				$("#player")[0].play();
				$(".version").text('当前版本：移动端版');
			}else{
				alert('当前浏览器不支持html5视频播放');
				return false;
			}
		})
		$(".flash").on('click',function(){
			if(IsPC()){
				$(this).siblings().removeClass('check');
				$(this).addClass('check');
				$("#CuPlayer").show();
				$("#video").hide();
				$("#player")[0].pause();
				flash();
				$(".version").text('当前版本：PC端Flash版');
			}else{
				alert('当前处于移动端环境');
				return false;
			}

		})
	}
	change();