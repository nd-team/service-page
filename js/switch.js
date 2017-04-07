/**
 * Created by ike on 2017/4/2.
 */
$(function () {
    // 点击汇总
    $(".hui-btn").on('click','.and-btn',function(){
        $(".summary-list").show();
    });
    $(".management-right .line-btn").on('mouseover',function () {
        $(".management-right li .right-list").show();
    });
    $(".management-right .line-btn").on('mouseout', function () {
        $(".management-right li .right-list").hide();
    });
    $(".all-main2>div").hide();
    $(".close").click(function () {
        $(this).parents(".all-main2>div").hide();
        $(this).parents(".module-layer>div").hide();
        $("#modulebg").hide()
    });
    $(".list-a[data-title]").click(function () {
        $('.list').show();
        $('.all-main3').hide();
    });
    $(".text-bg[data-title]").click(function () {
        var listTitle = $(this).attr("data-title");
         $('#modulebg').show();
         $('.all-main2').children("."+listTitle).show().siblings().hide();
         $('.all-main3').hide();
    });
    $(".text-nobg[data-title]").click(function () {
        var listTitle = $(this).attr("data-title");
        $('.list').hide();
        $('.all-main3').show();
        $('.all-main3').children("."+listTitle).show().siblings().hide();
    });
    $("a[data-title]").click(function () {
        var listTitle = $(this).attr("data-title");
        $('.module-layer').children("."+listTitle).show().siblings().hide();
        $('#modulebg').show();
    });
    $(".pages-2-more").click(function () {
        $(".more-red").show();
    })
});