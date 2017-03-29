$(function () {
    // $(".management-right .line-list").on('mouseover',function () {
    //     $(".management-right li .right-list").show();
    // });
    // $(".management-right .line-list").on('mouseout', function () {
    //     $(".management-right li .right-list").hide();
    // });

    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    })
});
