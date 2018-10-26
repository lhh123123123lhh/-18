$(function(){
	//头部列表
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
	
	//商品列表
	$(".dog").mouseenter(function(){
		 
		$(".main_left").css("display","block");
		$(".goods").css("display","none");
	})
	
	$(".sort").mouseenter(function(){
		 
		$(".main_left").css("display","none");
		$(".goods").css("display","block");
	})
	
	$(".goods span").mouseenter(function(){ 
		$(this).css("border","1px solid green").siblings().css("border","none");
	    $(this).children("div").css("display","block");
	})
	$(".goods span").mouseleave(function(){ 
		$(this).css("border","none");
	    $(this).children("div").css("display","none");
	}) 
	
	
	  
	    	 
	
	$(".doglist").mouseenter(function(){
		$(".list_li1").show();
	})
	$(".doglist").mouseleave(function(){
		$(".list_li1").hide();
	})
	$(".dogeat").mouseenter(function(){
		$(".list_li2").show();
	})
	$(".dogeat").mouseleave(function(){
		$(".list_li2").hide();
	})
	$(".dogfood").mouseenter(function(){
		$(".list_li3").show();
	})
	$(".dogfood").mouseleave(function(){
		$(".list_li3").hide();
	})
	
	
	
	
// 放大镜
    var _smallImg = $("#smallImg"); //小图
	var _smallArea = $("#smallArea"); //小区域
	var _bigImg = $("#bigImg"); //大图
	var _bigArea = $("#bigArea"); //大区域
	
	_smallArea.width( _smallImg.width()/_bigImg.width() * _bigArea.width() );
	_smallArea.height( _smallImg.height()/_bigImg.height() * _bigArea.height() );
	
	//放大系数(放大倍数)
	var scale = _bigImg.width() / _smallImg.width();
	
	//鼠标移动
	_smallImg.mousemove(function(e){
		_bigArea.show();
		_smallArea.show(); //显示小区域
		
		//移动小区域, 跟随鼠标移动
		var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
		var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
		
		//判断x不超出左边界,也不超出右边界
		if (x < 0) {
			x = 0;
		}
		else if (x > _smallImg.width() - _smallArea.width()) {
			x = _smallImg.width() - _smallArea.width();
		}
		
		//判断y不超出上边界,也不超出下边界
		if (y < 0) {
			y = 0;
		}
		else if (y > _smallImg.height() - _smallArea.height()) {
			y = _smallImg.height() - _smallArea.height();
		}
		
		_smallArea.css({left: x, top: y});
		
		//移动大图
		_bigImg.css({left: -x*scale, top: -y*scale});
						
	})
	
	//鼠标移出
	_smallImg.mouseleave(function(){
		_smallArea.hide(); //隐藏小区域
		_bigArea.hide();
	})
	
	//图片切换列表
	$(".img_list img").mouseenter(function(){
		var src = $(this).attr('src');
		$("#smallImg").css({background:"url("+ src +")",backgroundSize:"200px 200px"});
		$("#bigImg").attr("src",src);
		$(this).css("border","1px solid red").siblings().css("border","none");
		
	})
    //增加数量
    var i = 1; 
    $(".add").click(function(){    	 
    	$(".goodsNum").val(i++);     	 
    })
    $(".minu").click(function(){     	 
    	$(".goodsNum").val(i--);
    	if(i < 1){
    		i = 1;
    	}
   	})
       
	//添加购物车
	$(".addCart").click(function(){
		 
	    //将当前点击的商品加入购物车(使用cookie存储商品信息)
		var goodsId = $(this).parent().parent().parent().siblings().find(".goodsImg").attr("src"); //商品ID
		var goodsName = $(this).parent().parent().find(".goodsName").html(); //商品名称
		var goodsNum = $(this).parent().siblings(".size").find(".goodsNum").val(); //商品数量
		var goodsPrice = $(this).parent().siblings(".price").find(".goodsPrice").html(); //商品价格		
		//如果是第一次加入购物车(购物车中还没有商品, cookie中没有cart), 那就给一个空的数组
		//如果是第二次加入购物车(购物车中已经存在商品, cookie中存在cart), 那就在原来保存在cookie中的商品基础上添加新的商品 
		//console.log( typeof $.cookie("cart") ); //string 
		var goodsList = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
		
		//先判断购物车中是否存在我即将要添加的商品
		var isExists = false; //表示是否存在相同商品
		for (var i=0; i<goodsList.length; i++) {
			//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
			if (goodsId == goodsList[i].id) {
				goodsList[i].num++;
				isExists = true; //表示存在相同商品
			}
		}
		
		//如果不存在相同商品, 则添加新商品
		if (!isExists) {
			//添加一个新商品到购物车
			var goods = {
				id: goodsId,
				name: goodsName,
				price: goodsPrice,
				num: goodsNum
			}
			goodsList.push(goods);
		}
		
		$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
		console.log( $.cookie("cart") );
		
		
	})
						 		 		 	 
})
