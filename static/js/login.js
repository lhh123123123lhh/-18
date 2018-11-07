$(function () {
    $(".tel input").blur(function () {
        var num1 = $(this).val().length;
        if (num1 == 11) {
            $(".tel").removeClass("false").addClass("true");
        }
        else {
            $(".tel").removeClass("true").addClass("false");
        }
    })
    $(".passwd input").blur(function () {
        var num2 = $(this).val().length;

        if (num2 >= 6 && num2 <= 12) {
            $(".passwd").removeClass("false").addClass("true");
            console.log(num2)
        }
        else {
            $(".passwd").removeClass("true").addClass("false");
        }
    })
})
