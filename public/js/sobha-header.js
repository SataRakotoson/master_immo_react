/* Header Sobha : menu mobile (#slide-nav .show) et panneau recherche (#search-main .show) si présent */
(function ($) {
    "use strict";

    var $slide = $("#slide-nav");
    var $search = $("#search-main");
    var $toggle = $("#menu-toggle");
    var $searchClick = $("#search-click");

    function closeMenu() {
        $slide.removeClass("show");
        if ($toggle.length) {
            $toggle.attr("aria-expanded", "false");
        }
    }

    function openMenu() {
        if ($search.length) {
            $search.removeClass("show");
        }
        $slide.addClass("show");
        if ($toggle.length) {
            $toggle.attr("aria-expanded", "true");
        }
    }

    function closeSearch() {
        if ($search.length) {
            $search.removeClass("show");
        }
    }

    $toggle.on("click", function (e) {
        e.preventDefault();
        if ($slide.hasClass("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $("#close-menu").on("click", function (e) {
        e.preventDefault();
        closeMenu();
    });

    if ($searchClick.length && $search.length) {
        $searchClick.on("click", function (e) {
            e.preventDefault();
            closeMenu();
            $search.toggleClass("show");
        });
    }

    $("#closeSearch, #closeSearch-mob").on("click", function (e) {
        e.preventDefault();
        closeSearch();
    });

    $slide.find(".level-1-menu").on("click", function () {
        closeMenu();
    });

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            closeMenu();
            closeSearch();
        }
    });
})(jQuery);
