$(function () {
    //头部
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

    //吸顶
    var headerTop = $(".header").offset().top;
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        //判断是否滑动了
        if (scrollTop >= 1) {
            $(".header").css({"position": "fixed", top: 0});
        }
        else {
            $(".header").css("position", "static");
        }
    })

    total()
    // 单个点击
    $('.checkAll .bt').click(function () {
        var cartid = $(this).attr('cartid')
        var $that = $(this)
        console.log('ll')
        $.get('/click/', {'cartid': cartid}, function (response) {
            console.log(response)
            if (response.status == 1) {
                var isselect = response.isselect
                $that.attr('isselect', isselect)
                if (isselect) {
                    $that.removeClass('no').addClass('click')
                } else {
                    $that.removeClass('click').addClass('no')
                }
            }
            // 总计
            total()
        })


    })

    // 删除
    $('.remove').click(function () {
        var goodsid = $(this).attr('goodsid')
        $.get('/remove/', {'goodsid': goodsid}, function (response) {
            console.log(response)
            if (response.status == 1) {
                window.open('/shopcar/', target = '_self')
            }
        })
    })

    // 全选/取消全选
    $('.removeAll .qx').click(function () {
        var isselect = $(this).attr('isselect')
        isselect = (isselect == 'false') ? true : false
        $(this).attr('isselect', isselect)
        if (isselect) {
            $(this).removeClass('qx').addClass('xz')
        } else {
            $(this).removeClass('xz').addClass('qx')
        }

        $.get('/change/', {'isselect': isselect}, function (response) {
            console.log(response)
            if (response.status == 1) {
                // 遍历
                $('.checkAll').each(function () {
                    $(this).attr('isselect', isselect)
                    if (isselect) {
                        $(this).find('.bt').removeClass('no').addClass('click')
                    } else {
                        $(this).find('.bt').removeClass('click').addClass('no')
                    }
                })

                // 总计
                total()
            }
        })
    })

    function total() {
        var sum = 0

        // 遍历操作
        $('.goods').each(function () {
            if ($(this).find('.click').length) {
                var price = $(this).find('.price').attr('price')
                var a = price.replace("￥", "");
                var num = $(this).find('.num span').attr('number')
                sum += a * num
            }
        })
        // 显示
        $('.account .total h5').html(parseInt(sum))
    }

    // 增加数量
    $('.goods .num .add').click(function () {
        // 商品ID
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)
        $.get('/addcart/', {'goodsid': goodsid}, function (response) {
            console.log(response)
            if (response.status == 1) {   // 添加成功
                $that.prev().html('x' + response.number)
            }
        })
    })

    // 减少数量
    $('.goods .num .sub').click(function () {
        // 商品ID
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)
        $.get('/subcart/', {'goodsid': goodsid}, function (response) {
            console.log(response)
            if (response.status == 1) {   // 添加成功
                if (response.number > 1) {
                    $that.next().html('x' + response.number)
                } else {
                    $that.next().html('x' + 0)
                }
            }
        })
    })


    //
})