$(".hamburger-menu a.close").click(
    function () {
        $(".hamburger-menu").hide(200);
    }
);

$(".header-right > a").click(
    function () {
        $(".hamburger-menu").show(200);
    }
);
