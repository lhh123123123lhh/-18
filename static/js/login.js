$(function () {
    $(".tel input").blur(function () {
        var num1 = $(this).val().length;
        if (num1 == 11) {
            $(".right1").show();
            $(".placeholder1").hide();
            $(".tel").removeClass("active");
        }
        else {
            $(".placeholder1").show();
            $(".right1").hide();
            $(".tel").addClass("active");

        }
    })
})
