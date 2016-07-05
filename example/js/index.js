// JavaScript Document
(function(){
	var now = {row:1, col:1 }, 
	    last = { row:0, col:0};
	const towards = {
		up:1,
		right:2,
		down:3, 
		left:4
	};
	var isAnimating = false;
	
	s=window.innerHeight/500;
	ss=250*(1-s);
	$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');
	
	document.addEventListener('touchmove',function(event){
		event.preventDefault(); 
	},false);
	
		$(document).swipeUp(function(){
			if (isAnimating){
				return;
			}else{
				last.row = now.row;
				last.col = now.col;
			}
			if (last.row != 15) {
				now.row = last.row+1; 
				now.col = 1; 
				pageMove(towards.up);
			}	
		});
		
		$(document).swipeDown(function(){
			if (isAnimating){
				return;
			}else{
				last.row = now.row;
				last.col = now.col;
			}
			if (last.row!=1) {
				now.row = last.row-1; 
				now.col = 1; 
				pageMove(towards.down);
			}	
		});
		function pageMove(tw){
			var lastPage = ".page-"+last.row+"-"+last.col,
				nowPage = ".page-"+now.row+"-"+now.col;
			
			switch(tw) {
				case towards.up:
					outClass = 'pt-page-moveToTop';
					inClass = 'pt-page-moveFromBottom';
					break;
				case towards.right:
					outClass = 'pt-page-moveToRight';
					inClass = 'pt-page-moveFromLeft';
					break;
				case towards.down:
					outClass = 'pt-page-moveToBottom';
					inClass = 'pt-page-moveFromTop';
					break;
				case towards.left:
					outClass = 'pt-page-moveToLeft';
					inClass = 'pt-page-moveFromRight';
					break;
			}
			isAnimating = true;
			$(nowPage).removeClass("hide");
			
			$(lastPage).addClass(outClass);
			$(nowPage).addClass(inClass);
			
			setTimeout(function(){
				$(lastPage).removeClass('page-current');
				$(lastPage).removeClass(outClass);
				$(lastPage).addClass("hide");
				$(lastPage).find("img").addClass("hide");
				
				$(nowPage).addClass('page-current');
				$(nowPage).removeClass(inClass);
				$(nowPage).find("img").removeClass("hide");
				
				isAnimating = false;
			},600);
		}
})();
		/*控制背景音乐播放*/
		function audioPaly(){
			var audio = document.getElementById("myAudio");
			var play = document.getElementById("play");
			play.onclick=function(){
				if($("#play img").hasClass("music_active")){
					$("#play img").removeClass("music_active");
					$("#play img").attr("src","images/music2.png");
					audio.pause();
				}else{
					$("#play img").addClass("music_active");
					$("#play img").attr("src","images/music.png");
					audio.play();
				}
			}
		}
		audioPaly();
	
