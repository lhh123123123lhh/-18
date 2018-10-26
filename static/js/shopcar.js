$(function(){
	//头部
	$("#mypet").mouseenter(function(){
		$(".mypet").show();
	 
	})
	$("#mypet").mouseleave(function(){
		$(".mypet").hide();
		
	})
	$("#mycollect").mouseenter(function(){
		$(".mycollect").show();
	})
	$("#mycollect").mouseleave(function(){
		$(".mycollect").hide();
	})
			
	//吸顶
	var headerTop = $(".header").offset().top;	 	
	$(window).scroll(function(){		
		var scrollTop = $(document).scrollTop();		 		
		//判断是否滑动了		 
		if (scrollTop >= 1) {
			$(".header").css({"position":"fixed", top:0}); 
		}
        else {
			$(".header").css("position", "static");
		}
	})
	
	//添加购物车
	//goodsList字符串
	var goodsList = $.cookie("cart");
	//console.log(goodsLists); 
	if (goodsList) {		
		goodsList = JSON.parse(goodsList);
		//此goodsList对象
		//console.log(goodsList); 
		
		for (var i=0; i<goodsList.length; i++) {
			var goods = goodsList[i]; //每个商品
			
//			//创建节点
//	        var li = $("<li>" + goods.name + ", $" + goods.price + "," + goods.num + "</li>");
//			li.appendTo( $("#list") );
             
            var li = $("<li></li>");
            var div1 = $('<div class="checkAll"><input type="checkbox"></div>');    
            var div2 = $('<div class="picture"><h1><img src="'+ goods.id +'"/></h1><p>' + goods.name + "</p></div>");
            var div3 = $('<div class="num"><em>-</em><input type="text" value="'+ goods.num +'"/><i>+</i></div>');
            var div4 = $('<div class="price">￥270<span>'+ goods.price +"/件</span></div>");
            var div5 = $('<div class="remove"><a>[收藏]</a><a class="removecookie">[删除]</a></div>');
	 	    li.append(div1,div2,div3,div4,div5);	 	     
	 	    $(".list_ul").append(li);

		}
		 	 	    
 	    $(".removecookie").click(function(){ 		
		var _index = $(this).index(".removecookie");				 
		$(".list_ul li").eq(_index).remove();
		goodsList.splice(_index,1);
		$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});		   			 
        })
		
		//全选
		$(".search_all").click(function(){
			$checkbox.prop('checked',this.checked);			 
		})
		
 
	}
 
	
	
	
})