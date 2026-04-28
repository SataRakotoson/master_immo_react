(function () {
    if (window.__masterImmoSwiperRepairInit) return;
    window.__masterImmoSwiperRepairInit = true;

    var containerRuntimeClasses = [
        "swiper-initialized",
        "swiper-horizontal",
        "swiper-vertical",
        "swiper-autoheight",
        "swiper-backface-hidden"
    ];
    var slideRuntimeClasses = [
        "swiper-slide-active",
        "swiper-slide-next",
        "swiper-slide-prev",
        "swiper-slide-visible",
        "swiper-slide-fully-visible",
        "swiper-slide-duplicate",
        "swiper-slide-duplicate-active",
        "swiper-slide-duplicate-next",
        "swiper-slide-duplicate-prev"
    ];
    var navRuntimeClasses = [
        "swiper-button-lock",
        "swiper-button-disabled",
        "swiper-button-hidden"
    ];
    var sliderConfigs = [
        {
            scope: ".latest-launch-slider",
            minSlidesForLoop: 2,
            buildOptions: function (scopeEl) {
                return {
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },
                    navigation: {
                        nextEl: scopeEl.querySelector(".swiper-button-next"),
                        prevEl: scopeEl.querySelector(".swiper-button-prev")
                    },
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    breakpoints: {
                        300: {
                            autoplay: {
                                delay: 6000
                            }
                        },
                        1200: {
                            autoplay: {
                                delay: 6000
                            }
                        }
                    }
                };
            }
        },
        {
            scope: ".stories-slider",
            reuseExisting: true,
            minSlidesForLoop: 2,
            buildOptions: function (scopeEl) {
                return {
                    slidesPerView: 1.8,
                    spaceBetween: -140,
                    centeredSlides: true,
                    autoHeight: true,
                    roundLengths: true,
                    loop: true,
                    speed: 800,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: scopeEl.querySelector(".swiper-button-next"),
                        prevEl: scopeEl.querySelector(".swiper-button-prev")
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            autoplay: {
                                delay: 6000
                            }
                        },
                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: -70,
                            autoplay: {
                                delay: 6000
                            }
                        },
                        1024: {
                            slidesPerView: 1.8,
                            spaceBetween: -100,
                            autoplay: {
                                delay: 6000
                            }
                        },
                        1200: {
                            slidesPerView: 1.8,
                            spaceBetween: -140,
                            autoplay: {
                                delay: 5000
                            }
                        }
                    }
                };
            }
        }
    ];

    function removeClasses(el, classNames) {
        if (!el) return;
        classNames.forEach(function (className) {
            el.classList.remove(className);
        });
    }

    function getSlides(wrapper) {
        return Array.prototype.slice.call(wrapper.children).filter(function (node) {
            return node.classList && node.classList.contains("swiper-slide");
        });
    }

    function resetSlide(slide) {
        removeClasses(slide, slideRuntimeClasses);
        slide.removeAttribute("style");
        slide.removeAttribute("aria-hidden");
        slide.removeAttribute("tabindex");
    }

    function normalizeSlideOrder(wrapper) {
        var slides = getSlides(wrapper);
        var canSort = slides.length > 1 && slides.every(function (slide) {
            return slide.hasAttribute("data-swiper-slide-index");
        });

        if (!canSort) return slides;

        slides.sort(function (a, b) {
            return parseInt(a.getAttribute("data-swiper-slide-index"), 10) - parseInt(b.getAttribute("data-swiper-slide-index"), 10);
        });

        slides.forEach(function (slide) {
            wrapper.appendChild(slide);
        });

        return slides;
    }

    function ensureEnoughSlides(scopeEl, wrapper, minSlidesForLoop) {
        if (scopeEl.dataset.loopSlidesPatched === "true") return;

        var slides = getSlides(wrapper);
        if (!slides.length || slides.length > minSlidesForLoop) {
            scopeEl.dataset.loopSlidesPatched = "true";
            return;
        }

        slides.forEach(function (slide) {
            var clone = slide.cloneNode(true);
            resetSlide(clone);
            clone.removeAttribute("data-swiper-slide-index");
            wrapper.appendChild(clone);
        });

        scopeEl.dataset.loopSlidesPatched = "true";
    }

    function unlockNavigation(scopeEl) {
        scopeEl.querySelectorAll(".swiper-button-prev, .swiper-button-next").forEach(function (button) {
            removeClasses(button, navRuntimeClasses);
            button.style.display = "";
            button.style.pointerEvents = "auto";
            button.style.cursor = "pointer";
            button.removeAttribute("aria-disabled");
        });
    }

    function cleanupSwiper(scopeEl) {
        var swiperEl = scopeEl.querySelector(".swiper");
        if (!swiperEl) return null;

        try {
            if (swiperEl.swiper && !swiperEl.swiper.destroyed) {
                swiperEl.swiper.destroy(true, true);
            }
        } catch (ignore) {}

        removeClasses(swiperEl, containerRuntimeClasses);
        swiperEl.removeAttribute("style");

        var wrapper = swiperEl.querySelector(".swiper-wrapper");
        if (wrapper) {
            wrapper.removeAttribute("style");
            wrapper.removeAttribute("aria-live");
            normalizeSlideOrder(wrapper).forEach(function (slide) {
                resetSlide(slide);
            });
        }

        swiperEl.querySelectorAll(".swiper-notification").forEach(function (notification) {
            notification.remove();
        });

        scopeEl.querySelectorAll(".swiper-button-prev, .swiper-button-next").forEach(function (button) {
            removeClasses(button, navRuntimeClasses);
            button.removeAttribute("style");
        });

        return swiperEl;
    }

    function refreshScope(scopeEl) {
        var swiperEl = scopeEl.querySelector(".swiper");
        if (!swiperEl || !swiperEl.swiper) return;

        var swiperInstance = swiperEl.swiper;
        unlockNavigation(scopeEl);

        try {
            var nextButton = scopeEl.querySelector(".swiper-button-next");
            var prevButton = scopeEl.querySelector(".swiper-button-prev");
            if (swiperInstance.params && swiperInstance.params.navigation) {
                swiperInstance.params.navigation.nextEl = nextButton;
                swiperInstance.params.navigation.prevEl = prevButton;
            }
            if (swiperInstance.originalParams && swiperInstance.originalParams.navigation) {
                swiperInstance.originalParams.navigation.nextEl = nextButton;
                swiperInstance.originalParams.navigation.prevEl = prevButton;
            }
            if (swiperInstance.navigation) {
                if (typeof swiperInstance.navigation.destroy === "function") {
                    swiperInstance.navigation.destroy();
                }
                if (typeof swiperInstance.navigation.init === "function") {
                    swiperInstance.navigation.init();
                }
            }
            if (swiperInstance.navigation && typeof swiperInstance.navigation.update === "function") {
                swiperInstance.navigation.update();
            }
            if (typeof swiperInstance.update === "function") {
                swiperInstance.update();
            }
            if (typeof swiperInstance.updateAutoHeight === "function") {
                swiperInstance.updateAutoHeight();
            }
        } catch (ignore) {}
    }

    function initScope(config) {
        var scopeEl = document.querySelector(config.scope);
        if (!scopeEl) return;

        var shouldEnable = typeof config.shouldEnable === "function" ? config.shouldEnable() : true;
        scopeEl.classList.toggle("slider-static", !shouldEnable);

        if (!shouldEnable) {
            cleanupSwiper(scopeEl);
            scopeEl.dataset.swiperRepaired = "false";
            return;
        }

        if (scopeEl.dataset.swiperRepaired === "true") {
            refreshScope(scopeEl);
            return;
        }

        var existingSwiperEl = scopeEl.querySelector(".swiper");
        if (config.reuseExisting && existingSwiperEl && existingSwiperEl.swiper && !existingSwiperEl.swiper.destroyed) {
            scopeEl.dataset.swiperRepaired = "true";
            refreshScope(scopeEl);
            return;
        }

        var swiperEl = cleanupSwiper(scopeEl);
        if (!swiperEl) return;

        var wrapper = swiperEl.querySelector(".swiper-wrapper");
        if (wrapper) {
            ensureEnoughSlides(scopeEl, wrapper, config.minSlidesForLoop);
            getSlides(wrapper).forEach(function (slide) {
                slide.removeAttribute("data-swiper-slide-index");
            });
        }

        var options = config.buildOptions(scopeEl);
        var originalEvents = options.on || {};

        options.observer = true;
        options.observeParents = true;
        options.watchOverflow = false;
        options.loopPreventsSliding = false;
        options.on = Object.assign({}, originalEvents, {
            init: function () {
                unlockNavigation(scopeEl);
                if (typeof this.updateAutoHeight === "function") {
                    this.updateAutoHeight();
                }
                if (typeof originalEvents.init === "function") {
                    originalEvents.init.apply(this, arguments);
                }
            },
            resize: function () {
                unlockNavigation(scopeEl);
                if (typeof this.updateAutoHeight === "function") {
                    this.updateAutoHeight();
                }
                if (typeof originalEvents.resize === "function") {
                    originalEvents.resize.apply(this, arguments);
                }
            },
            update: function () {
                unlockNavigation(scopeEl);
                if (typeof originalEvents.update === "function") {
                    originalEvents.update.apply(this, arguments);
                }
            },
            slideChangeTransitionEnd: function () {
                unlockNavigation(scopeEl);
                if (typeof this.updateAutoHeight === "function") {
                    this.updateAutoHeight();
                }
                if (typeof originalEvents.slideChangeTransitionEnd === "function") {
                    originalEvents.slideChangeTransitionEnd.apply(this, arguments);
                }
            }
        });

        new Swiper(swiperEl, options);
        scopeEl.dataset.swiperRepaired = "true";
        refreshScope(scopeEl);
    }

    function initAllSwipers() {
        if (!window.Swiper) return;
        sliderConfigs.forEach(initScope);
    }

    function refreshAllSwipers() {
        sliderConfigs.forEach(function (config) {
            var scopeEl = document.querySelector(config.scope);
            if (scopeEl) {
                refreshScope(scopeEl);
            }
        });
    }

    window.addEventListener("load", function () {
        initAllSwipers();
        setTimeout(refreshAllSwipers, 300);
        setTimeout(refreshAllSwipers, 1000);
    });

    window.addEventListener("resize", function () {
        initAllSwipers();
    });
})();
