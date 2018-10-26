$(function(){				 				
	$(".phone").blur(function(){
		var right1_num = $(".phone").val().length;
		if(right1_num == 11){
			$(".right1").css("display","block");
			$(".right1_num").css("display","none");
			$(".phone").removeClass("active");
		}					 
		else if(right1_num < 11 || right1_num > 11){
			$(".right1_num").css("display","block");
			$(".right1").css("display","none");
			$(".phone").addClass("active");
 
					}
				})
				$(".checkcode").blur(function(){
		var right3_num = $(".checkcode").val().length;
		if(right3_num == 4){
			$(".right3").css("display","block");
			$(".right3_num").css("display","none");
			$(".checkcode").removeClass("active");
		}					 
		else if(right3_num < 4 || right3_num > 4){
			$(".right3_num").css("display","block");
			$(".right3").css("display","none");
			$(".checkcode").addClass("active");
		}
	})	
	$(".user").blur(function(){
		var right4_num = $(".user").val().length;
		if(right4_num >= 4 && right4_num <=20){
			$(".right4").css("display","block");
			$(".right4_num").css("display","none");
			$(".user").removeClass("active");
		}					 
		else if(right4_num <= 4 || right4_num >= 20){
			$(".right4_num").css("display","block");
			$(".right4").css("display","none");
			$(".user").addClass("active");
		}
	})	
	 
	$(".pwds").blur(function(){
        $("#text").find("ul").css("display","none");
        $("#text").css("height","57px");
        var right5_num = $(".pwds").val().length;
		if(right5_num >= 8 && right5_num <= 20){
			$(".right5").css("display","block");
			$(".right5_num").css("display","none");
			$(".pwds").removeClass("active");
		}					 
		else if(right5_num <= 8 || right5_num >= 20){
			$(".right5_num").css("display","block");
			$(".right5").css("display","none");
			$(".pwds").addClass("active");
		}
	})
	
	//密码
//				实时监听
//					$('textarea').bind('input propertychange', function() {
//				    $('.msg').html($(this).val().length + ' characters');
//					});
	
	$(".pwds").focus(function(){										 					 
		$("#text").css("height","90px");
		$("#text").find("ul").css("display","block");
		 
		$(".pwds").bind('input propertychange', function() {
			var right5_num = $(".pwds").val().length;						
			if(right5_num < 5 ){
				$(".rank1").css("background","red");
			}
			if(right5_num > 5){
				$(".rank1").css("background"," red");
				$(".rank2").css("background"," red");
			}
			if(right5_num > 10){
				$(".rank1").css("background"," red");
				$(".rank2").css("background"," red");
				$(".rank3").css("background"," red");
			}
			else{
				console.log("输入有误");
			}
		})
		 										
	})
	
	
	
	
	$(".repwd").blur(function(){
		var right6_num = $(".repwd").val();
		var pwds = $(".pwds").val();
		if(right6_num == pwds){
			$(".right6").css("display","block");
			$(".right6_num").css("display","none");
			$(".repwd").removeClass("active");
		}					 
		else if(right6_num != pwds){
			$(".right6_num").css("display","block");
			$(".right6").css("display","none");
			$(".repwd").addClass("active");
		}
	})	
	
	//验证码
	$.idcode.setCode();   //加载生成验证码方法
	
	$(".btn").click(function(){
        var codes = $(".txtVerification").val();
	})
	
	
	$(".txtVerification").blur(function(){
    	var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false			         
        console.log("999 "+IsBy);
        
    	if(IsBy){		        		 
			$(".right2").css("display","block");
			$(".right2_num").css("display","none");
			$(".txtVerification").removeClass("active");
    		 			            
        }else {
            $(".right2_num").css("display","block");
			$(".right2").css("display","none");
			$(".txtVerification").addClass("active");
        }
        
    })
	
	//立即注册
	
	//如果已经存在该用户, 不能注册
	//不存在则注册, 保存到cookie
	
	$(".button").click(function(){		 
		$(this).find("input").css("background","#33CB98");					
		//注册(cookie存储)
		var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
		//先判断是否存在该用户
		for (var i=0; i<users.length; i++) {
			if ( users[i].name == $(".user").val() ) {
				alert("用户名已存在! 不能注册相同的用户");
				return;
			} 						 
		}
		
		//注册用户
		var user = {
			name: $(".user").val(),
			pwd: $(".pwds").val()
		}
		users.push(user); 
		
		//注册信息保存到cookie
		$.cookie("users", JSON.stringify(users), {expires:22, path:"/"});
		console.log( $.cookie("users") );
		 
	})
	 														
})
	 
 
