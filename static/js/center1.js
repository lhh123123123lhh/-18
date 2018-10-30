$(function () {
    $.getJSON("static/json/center1.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var li = $("<li><img src=" + obj.img + " ><p>" + obj.name + "</p><h2>" + obj.price + "</h2><i>" + obj.preprice + "</i><b>" + obj.activity + "</b><a href='#'>" + obj.span + "</a></li>");
            $(".center1_div1 ul").append(li);
        }
    })

})