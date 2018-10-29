$(function () {
    $.getJSON("json/content.json", function (data) {
        for (var j = 0; j < data.length; j++) {
            for (var i = 0; i < data[j].length; i++) {
                var obj = data[j][i];
                var li = $("<li><img src=" + obj.img + " ><p>" + obj.name + "</p><span>" + obj.price + "</span></li>");
                li.addClass("content_main");
                $(".ww .mm ul").eq(j).append(li);
            }
        }
    })
})
