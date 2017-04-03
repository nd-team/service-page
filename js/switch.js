/**
 * Created by ike on 2017/4/2.
 */
$(function () {
    $(".management-right .line-btn").on('mouseover',function () {
        $(".management-right li .right-list").show();
    });
    $(".management-right .line-btn").on('mouseout', function () {
        $(".management-right li .right-list").hide();
    });
    $(".all-main2>div").hide();
    $(".close").click(function () {
        $(this).parents(".all-main2>div").hide();
        $("#modulebg").hide()
    });
    $("p[data-title]").click(function () {
        var listTitle = $(this).attr("data-title");
        $('.all-main2').children("."+listTitle).find("#modulebg,#modulebg2").show();
        $('.all-main2').children("."+listTitle).show().siblings().hide();
    });
});