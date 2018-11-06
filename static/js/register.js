$(function () {
    //手机号
    $("#tel input").blur(function () {
        if ($(this).val() == '') return
        var phone = $(this).val()
        var tel = /^1(3|4|5|8|9)(\d){9}/
        var bool = tel.test(phone)
        if (bool) {
            $.get('/CheckTel/', {'phone': phone}, function (response) {
                console.log(response)
                if (response.status == 1) {
                    $(".right1").show();
                    $(".right1_num").hide();
                    $("#tel input").removeClass("active");
                } else if (response.status == -1) {
                    $(".right1_num").show().html(response.msg);
                    $(".right1").hide();
                    $("#tel input").addClass("active");
                }
            })
        }
        else {
            $(".right1_num").show();
            $(".right1").hide();
            $("#tel input").addClass("active");
        }
    })

    //验证码
    $.idcode.setCode();   //加载生成验证码方法
    $(".btn").click(function () {
        var codes = $(".txtVerification").val();
    })
    $("#txtVerification input").blur(function () {
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        // console.log("999 " + IsBy);

        if (IsBy) {
            $(".right2").show();
            $(".right2_num").hide();
            $("#txtVerification input").removeClass("active");

        } else {
            $(".right2_num").show();
            $(".right2").hide();
            $("#txtVerification input").addClass("active");
        }

    })

    //用户
    $("#user input").blur(function () {
        var right4_num = $("#user input").val().length;
        if (right4_num != '') {
            $(".right4").show();
            $(".right4_num").hide();
            $("#user input").removeClass("active");
        }
        else {
            $(".right4_num").show();
            $(".right4").hide();
            $("#user input").addClass("active");
        }
    })

    // 密码
    $("#password input").blur(function () {
        $("#password").find("ul").hide();
        $("#password").css("height", "57px");
        var right5_num = $(this).val().length;
        if (right5_num >= 6 && right5_num <= 12) {
            $(".right5").show();
            $(".right5_num").hide();
            $(this).removeClass("active");
        }
        else if (right5_num < 6 || right5_num > 12) {
            $(".right5_num").show();
            $(".right5").hide();
            $(this).addClass("active");
        }
    })

    //密码
//				实时监听
//					$('textarea').bind('input propertychange', function() {
//				    $('.msg').html($(this).val().length + ' characters');
//					});

    $("#password input").focus(function () {
        $("#password").css("height", "90px");
        $("#password").find("ul").show();

        $("#password input").bind('input propertychange', function () {
            var right5_num = $("#password input").val().length;
            if (right5_num < 5) {
                $(".rank1").css("background", "red");
            }
            if (right5_num > 5) {
                $(".rank1").css("background", "gray");
                $(".rank2").css("background", "red");
            }
            if (right5_num > 10) {
                $(".rank1").css("background", "gray");
                $(".rank2").css("background", "gray");
                $(".rank3").css("background", " red");
            }
            else {
                console.log("输入有误");
            }
        })

    })


    $("#passwd input").blur(function () {
        var right6_num = $(this).val();
        var pwds = $("#password input").val();
        if (right6_num == pwds) {
            $(".right6").show();
            $(".right6_num").hide();
            $("#password input").removeClass("active");
        }
        else {
            $(".right6_num").show();
            $(".right6").hide();
            $("#password input").addClass("active");
        }
    })

})
	 
 
