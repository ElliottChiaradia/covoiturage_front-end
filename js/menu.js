/* This plugin add a top menu to the application */

(function($) {

    jQuery.fn.menu = function(options){

        //creating menu
        var $topMenu = $("<div class='top-menu'/>");
        var $listMenu = $("<ul class='list-menu'>");
        var element1Menu = "<li class='element-menu'><a href='#donnees_personnelles'>"+options.element1+"</a></li>";
        var element2Menu = "<li class='element-menu'><a href='#blog'>"+options.element2+"</a></li>";
        var element3Menu = "<li class='element-menu'><a href='#about'>"+options.element3+"</a></li>";

        //building menu in DOM
        $(".panel").append($topMenu);
        $(".top-menu").append($listMenu);
        $(".list-menu").append(element1Menu);
        $(".list-menu").append(element2Menu);
        $(".list-menu").append(element3Menu);


        //display or hide menu on click
        $( ".menu-principal" ).click(function(){
            if($(".top-menu").is(":hidden")) {
                $(".top-menu").slideDown();
            } else {
                $(".top-menu").slideUp();
            }
        });


    }

})(jQuery)