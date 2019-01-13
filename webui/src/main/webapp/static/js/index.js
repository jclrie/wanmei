$(function () {
    $(".header_slide").slide({
        titCell: ".hd",
        mainCell: ".bd ul",
        autoPage: "<a href='javascript:void(0)'></a>",
        autoPlay: true,
        effect: "left",
        trigger: "click",
        vis: "auto"
    }).find("li").show();
    $(".area").slide({
        titCell: "dl dd",
        mainCell: ".content",
        trigger: "click",
        autoPlay: true,
        interTime: 5000,
        endFun: function (b, f, e) {
            var d = $(e).find(".title_main dd.on").attr("link");
            var a = $(e).find(".title_main .more");
            if (d) {
                a.attr("href", d)
            } else {
                a.attr("href", a.data("targetHref"))
            }
        },
        prevCell: "",
        nextCell: "",
        effect: "left"
    }).find(".main").show();
    $(".dota_slide").slide({
        titCell: ".hd",
        mainCell: ".bd ul",
        autoPage: "<a href='javascript:void(0)'></a>",
        autoPlay: true,
        effect: "left",
        trigger: "click"
    });
    $(".buying li .border").hover(function () {
        $(this).css("border", "6px solid #F6F6F6")
    }, function () {
        $(this).css("border", "6px solid #FFF")
    });
    $(".partners .picScroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        scroll: 10,
        vis: 10,
        trigger: "click"
    });
    if ($(".slideBox .bd ul li").length > 1) {
        $(".slideBox").slide({mainCell: ".bd ul", autoPlay: true})
    }
    $(".left-float-close").click(function (a) {
        $(".left-float-box").toggle()
    })
});