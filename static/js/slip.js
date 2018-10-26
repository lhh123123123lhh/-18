$(function(){
	$.getJSON("json/slip.json", function(data){					
		
		 
		for (var i=0; i<data.length; i++) {				 
			var obj = data[i];	
			
			var li = $("<li><img src=" + obj.img + " /></li>");
			 
			$("#banner_ul").append(li);	
			
			var li2 = $("<li>"+ obj.id +"</li>");
			li2.addClass("active2");
			$("#banner_bar").append(li2);							 
		}
		 
		 
		
		aa()//先调用再执行本函数
	})				
    
	function aa(){
		var _list1 = $("#banner_ul");
		var _list2 = $("#banner_bar");
		var _li1 = $("#banner_ul li");
		var _li2 = $("#banner_bar li");
		
		//复制第1张图, 并且添加到最后成为第5张图
		_li1.first().clone().appendTo(_list1);
		var size = $("#banner_ul li").length;
		 
		
		//显示的图片下标
		var i = 0;
		var color = ["#0a9711","#9a07ab","#dacbaa","#d7aada","#c5e6ee","#23c1e8","#bef306","#0a9711"];			 

		//启动定时器, 开始自动轮播
		var timer = null;
		function time(){
			clearInterval(timer);
			timer = setInterval(function(){
				i++;
				move();			 
		        $("#head_middle").css("background", ""+ color[i] +""); 		        		        
			    $("#bottom_left ul li a").css("background", ""+ color[i] +"");
			   
		    }, 3000);
		}
		time();
		
		_li2.click(function(){
			 
			var index = $(this).index();
			i = index;
			move();
			 
		})
		
		
		
		//move,移动
		function move() {
			
			//如果超出了左边的第一张图
			if (i < 0) {
				_list1.css("left", -(size-1)*770); //瞬间移动到第5张图的位置
				i = size-2; //即将移动到第4张图
			}
			
			//如果超出了最后的图片
			if (i >= size ) {
				_list1.css("left", 0); //瞬间移动到第1张图(i=0的位置)
				i = 1; //即将移动到第2张图(i=1)
			}
			//移动到第i张图
			_list1.stop().animate({left: -i*770},500);
			//下标圆点
		 
			_li2.eq(i).removeClass("active2").addClass("active2").siblings().removeClass("active2")
				if (i == size-1) {
					_li2.eq(0).removeClass().addClass("active2").siblings().removeClass("active2")
				}							 
		}
		//点击事件

		//划入区域停止
		$("#banner").hover(function(){ 
			//移入 mouseenter
			clearInterval(timer); //停止定时器, 停止自动轮播
			}, 
			function(){
				//移出, mouseleave
				clearInterval(timer); 
				time();
	        })
	}
	
	 
	 
})
 