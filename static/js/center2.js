$(function () {
    $.getJSON("json/conter2.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var div = $("<div><img src=" + obj.img + "><span><h5>" + obj.name + "</h5><em><i>" + obj.price + "</i><b>" + obj.reason + "</b></em><p>" + obj.p + "</p></span></div>")
            div.addClass('center2_con');
            $(".center2_main").append(div);
        }

    })
})
