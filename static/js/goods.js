$(function () {
    //头部列表
    $("#mypet").mouseenter(function () {
        $(".mypet").show();

    })
    $("#mypet").mouseleave(function () {
        $(".mypet").hide();

    })
    $("#mycollect").mouseenter(function () {
        $(".mycollect").show();
    })
    $("#mycollect").mouseleave(function () {
        $(".mycollect").hide();
    })

    //商品列表
    $(".dog").mouseenter(function () {

        $(".main_left").css("display", "block");
        $(".goods").css("display", "none");
    })

    $(".sort").mouseenter(function () {

        $(".main_left").css("display", "none");
        $(".goods").css("display", "block");
    })

    $(".goods span").mouseenter(function () {
        $(this).css("border", "1px solid green").siblings().css("border", "none");
        $(this).children("div").css("display", "block");
    })
    $(".goods span").mouseleave(function () {
        $(this).css("border", "none");
        $(this).children("div").css("display", "none");
    })

    $(".doglist").mouseenter(function () {
        $(".list_li1").show();
    })
    $(".doglist").mouseleave(function () {
        $(".list_li1").hide();
    })
    $(".dogeat").mouseenter(function () {
        $(".list_li2").show();
    })
    $(".dogeat").mouseleave(function () {
        $(".list_li2").hide();
    })
    $(".dogfood").mouseenter(function () {
        $(".list_li3").show();
    })
    $(".dogfood").mouseleave(function () {
        $(".list_li3").hide();
    })


// 放大镜
    var _smallImg = $("#smallImg"); //小图
    var _smallArea = $("#smallArea"); //小区域
    var _bigImg = $("#bigImg"); //大图
    var _bigArea = $("#bigArea"); //大区域

    var Newurl = _smallImg.attr('bgimg')
    // console.log(Newurl)
    _smallImg.css('background-image', 'url(' + Newurl + ')')
    _smallArea.width(_smallImg.width() / _bigImg.width() * _bigArea.width());
    _smallArea.height(_smallImg.height() / _bigImg.height() * _bigArea.height());

    //放大系数(放大倍数)
    var scale = _bigImg.width() / _smallImg.width();

    //鼠标移动
    _smallImg.mousemove(function (e) {
        _bigArea.show();
        _smallArea.show(); //显示小区域

        //移动小区域, 跟随鼠标移动
        var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
        var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;

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
        _bigImg.css({left: -x * scale, top: -y * scale});

    })

    //鼠标移出
    _smallImg.mouseleave(function () {
        _smallArea.hide(); //隐藏小区域
        _bigArea.hide();
    })

    //图片切换列表
    $(".img_list img").mouseenter(function () {
        var src = $(this).attr('src');
        $("#smallImg").css({background: "url(" + src + ")", backgroundSize: "200px 200px"});
        $("#bigImg").attr("src", src);
        $(this).css("border", "1px solid red").siblings().css("border", "none");

    })


    //增加数量
    $(".add").click(function () {
        var num1 = $(".num").html()
        $(".num").html(parseInt(num1) + 1);
        // console.log('1')
    })


    $(".minu").click(function () {
        var num2 = parseInt($(".num").html())

        if (num2 <= 1) {
            $(".num").html(1)
        } else {
            $(".num").html(num2 - 1);
        }
    })

    //添加购物车
    $(".addCart").click(function () {
        var goodsid = $(this).attr('goodsid')
        var num = $('.num').html()
        // var $that = $(this)
        $.get('/AddToCart/', {'goodsid': goodsid, 'num': num}, function (response) {
            console.log(response)
            if (response.status == -1) {
                window.open('/login/', target = "_self")
            } else if (response.status == 1) {
                window.open('/homepage/', target = "_self")
            }
        })

    })

})
