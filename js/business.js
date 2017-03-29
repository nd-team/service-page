$(function () {
    $(".management-right li").on('mouseover',function () {
        $(".management-right li .right-list").show();
    });
    $(".management-right li").on('mouseout', function () {
        $(".management-right li .right-list").hide();
    });

    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    })

    $(".so").on('click','.under-search',function () {
        $('.search-module').show();
    })
    $(".search-module .right-btn").on('click','.cancel',function () {
        $('.search-module').hide();
    })
});
