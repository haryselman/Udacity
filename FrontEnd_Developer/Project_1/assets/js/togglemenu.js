/**
 * this script depends on jquery which I added to the bottom of the body.
 * script replaces or toggels between classes to enable the responsive hamburger menu.
 */
$(document).ready(function(){
    $("header button").click(function(){
        $("#js_close_menu").toggleClass("fa-bars fa-times");
        $("nav").toggleClass("menu-hamburger menu-hamburger-visible");
        $("#js_show_social_icons").toggleClass("social-icons-visible");
    });
});