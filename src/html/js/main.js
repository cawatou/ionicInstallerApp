$(".yes .more").click(function () {
    $(this).toggleClass("active");
    $(".hidden").slideToggle("300");
});
(function ($) {
    $(function () {
        $('input, select').styler();
    });
})(jQuery);