$(function () {
    $(".management-right .line-btn").on('mouseover',function () {
        $(".management-right li .right-list").show();
    });
    $(".management-right .line-btn").on('mouseout', function () {
        $(".management-right li .right-list").hide();
    });

    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    });

    // 点击搜索输入
    $(".so").on('click','.under-search',function () {
        $('.search-module').show();
    });
    $(".search-module .right-btn").on('click','.cancel',function () {
        $('.search-module').hide();
    });

    $('.right-list p').on("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    //切换菜单栏
    $('.management-right .line-btn .right-list').on("click",".list-text",function(){
        var listTitle = $(this).attr("data-title");
        console.log(listTitle);
        if(listTitle=="delete"){
            $('.all-main').children('.delete').show();
            $("#modalbg").show();
        }else if(listTitle=="review"){
            $('.all-main').children('.review').show();
            $("#modalbg").show();
        }else {
            $('.all-main').children("."+listTitle).show().siblings().hide();
        }
    });
    //删除框
    $('.content').on("click",".delete button,.review button",function(){
        $('.delete').hide();
        $('.review').hide();
        $("#modalbg").hide()
    });
});
