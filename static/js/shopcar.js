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


    //全选
    $(".removeAll input").click(function () {
    })

})