$(".yes .mm").click(function () {
    $(this).toggleClass("active");
    $(".hidden").slideToggle("300");
});
$(".profile-ul ul li a").click(function () {
    $(".profile-ul ul").toggleClass("active");
    $(this).toggleClass("active");
    $(this).parent("li").toggleClass("active");
    $(this).next(".hidden").toggleClass("active").slideToggle("300");
});
$(".profile-ul .add-button").click(function () {
    $(this).toggleClass("active");
    $(".profile-ul ul").hide();
    $(".hidden2").toggleClass("active").slideToggle("300");
});
$(".knowledge-list li a").click(function () {
    $(".knowledge-list").toggleClass("active");
    $(this).toggleClass("active");
    $(this).parent("li").toggleClass("active");
    $(this).next(".hidden").toggleClass("active").slideToggle("300");
});
(function ($) {
    $(function () {
        $('input, select').styler();
    });
})(jQuery);