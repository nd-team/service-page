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
        // console.log(listTitle);
        // if(listTitle=="delete"){
        //     $('.all-main').children('.delete').show();
        //     $("#modalbg").show();
        // }else if(listTitle=="review"){
        //     $('.all-main').children('.review').show();
        //     $("#modalbg").show();
        // }else {
        //     $('.all-main').children("."+listTitle).show().siblings().hide();
        // }
        // if(listTitle===undefined){
        //     return
        // }else {
        //     $('.list').find('.'+listTitle).show().siblings().not('.article,.so').hide();
        //     $("#modulebg").show();
        // }
        if(listTitle==="summary"){
            $('.all-main').children('.summary').show().siblings().not('.article,.so').hide();
            $("#modulebg").hide();
        }else if(listTitle==="view"){
            $('.all-main').children('.view').show().siblings().not('.article,.so').hide();
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
        $("#modulebg").hide()
    });

    // 切换其它菜单栏
    $(".right-list").find(".same-tab").on("click",function(){
        var $this = $(this),
            $index = $this.index();
        $this.addClass("have").siblings().removeClass("have");
        $(".same-over").addClass("over-one").eq($index).show().siblings(".same-over").removeClass("over-one").hide();

        // if($this.hasClass('have')){
        //     $(".all-main").find(".same-over").eq($index).show();
        //     // $(".all-main").find(".list").hide();
        // }else {
        //     $this.removeClass("have");
        //     $(".all-main").find(".same-over").eq($index).hide()
        // }
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
    $(".supplier-list").on('click','.deleted-btn',function () {
        $(this).parent().css({'border':'1px solid red', 'width':'48%'});
    })
});












