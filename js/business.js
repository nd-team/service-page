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

        if(listTitle==="summary"){
            $('.all-main').children('.summary').show().siblings().not('.article,.so').hide();
            $("#modulebg").hide();
        }else if(listTitle==="view"){
            $('.all-main').children('.view').show().siblings().not('.article,.so').hide();
            $("#modulebg").hide();
        }else if(listTitle==="edit-info"){
            $('.all-main').children('.edit-info').show().siblings().not('.article,.so').hide();
            $("#modulebg").hide();
        }else if(listTitle==="list"){
            $('.all-main').children('.list').show().siblings().hide();
            $("#modulebg").hide();
        }else {
            if(listTitle===undefined){
                $('.all-main').children('.list').show().siblings().hide();
            }else {
                $('.list').find('.'+listTitle).show().siblings().not('.article,.so').hide();
                $("#modulebg").show();
            }
        }
    });
    //编辑框
    $('.same-hide').on("click",".close",function(){
        $('.same-hide').hide();
        $("#modulebg").hide();
        // $(".article .deleted-btn").parent().css({'border':'0', 'width':'49%'});
    });

    // 文件切换
    (function($){
        $.fn.myTab = function(options){//将对象作为参数传进去
            var defult = {parent:"",index:null},
                setting =$.extend(defult,options);//extend方法合并两个对象，如果两个对象有相同属性，则后面的那个对象的属性覆盖前面那个对象的属性。
            $(this).find("li").on("click",function(){
                var $this=$(this),
                    $index =$this.index();
                $this.addClass("current").siblings().removeClass("current");
                $(setting.parent).children("ul").eq($index).show().siblings().hide();//切换标签对应的内容


            });
            //判断进入页面显示那个标签样式和内容
            if(setting.index==null){
                $(this).find('li').eq(0).click();
            }else{
                $(this).find('li').eq(options.index).click();
            }
        }
    })(jQuery);

    $(".name-left").myTab({parent:".file-order",index:0});

    // 点击汇总
    $(".hui-btn").on('click','.and-btn',function(){
        $(".summary-list").show();
    });

     // 点击select跳链接
    $('#href_select').on('change', function () {
        var href = $(this).val(); // get selected value
        if (href) { // require a href
            window.location = href; // redirect
        }
        return false;
    });

    // 点击删除
    $(".article .click-button").on('click','.deleted-btn',function () {
        // $(this).parents().parents().css({'border':'1px solid red', 'width':'48%'});
        $("#modulebg").show();
        $(".same-del").show();
    });

    // 点击编辑
    $(".article .click-button").on('click','.edit-btn',function () {
        $("#modulebg").show();
        $(".same-other").show();
        $(".edit").show();
    });
    // 点击放大图片
    $(".list-left .pic-left").on('click','.magnifier',function () {
        if(!$(this).hasClass('big')){
            $(this).addClass('big');
            $(this).parents().siblings('.bigger').show();
        }else {
            $(this).removeClass('big');
            $(this).parents().siblings('.bigger').hide();
        }

    });
    $(".bigger").on('click','.close-pic',function () {
        $(".bigger").hide();
    });

    // 列表页图标

    $(".click-button .mark-btn").on('click',function () {
        if(!$(this).hasClass("show")){
            $(this).addClass("show");
            $(this).parents(".click-button").find('.hide-show').slideDown()
        }else {
            $(this).removeClass("show");
            $(this).parents(".click-button").find('.hide-show').slideUp()
        }
    });
    // 点击列表查看详情
    $(".three-circle .yuan").on('click',function () {
        if(!$(this).hasClass("show")){
            $(this).addClass("show");
            $(this).parents(".three-circle").find('.more-list').show();
        }else {
            $(this).removeClass("show");
            $(this).parents(".three-circle").find('.more-list').hide();
        }
    });
});












