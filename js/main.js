jQuery(document).ready(function ($) {
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    }
});