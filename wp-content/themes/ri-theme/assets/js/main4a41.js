jQuery(function($){

    // VINNYFOLLOW
    $('.vinnyfollow').vinnyFollow({
        wrapper: 1260,
        color: '#5B5B59',
        alignClass: '.underlay-top'
    });

    // INFO SLIDER
    var infoSlides = $('.info-slides');
    var infoSlider = $('#info-slider');

    infoSlides.on('afterChange init', function (event, slick, currentSlide) {
        infoSlider.find('.slide-dot[data='+currentSlide+']').addClass('active');

        var delay = 0;
        infoSlider.find('.slick-active > *').each(function () {
            $(this).css({
                '-webkit-transition-delay': delay + 's',
                '-moz-transition-delay': delay + 's',
                '-ms-transition-delay': delay + 's',
                '-o-transition-delay': delay + 's',
                'transition-delay': delay + 's'
            });
            delay += 0.2;
        });

        infoSlides.find('.slick-active').addClass('slide-anim');

    });

    infoSlides.on('beforeChange', function () {
        infoSlider.find('.slide-dot').removeClass('active');
        infoSlides.find('.slide-anim').removeClass('slide-anim');
    });

    infoSlides.slick({
        slide: '.info-slide',
        autoplay: 'true',
        infinite: true,
        arrows: false,
        cssEase: 'linear',
        fade: true,
        speed: 500,
        autoplaySpeed: 5000
    });

    infoSlider.find('.slide-dot').on('click', function () {
        var slide = $(this).attr('data');
        infoSlides.slick('slickGoTo', slide);
    });

    // BLOCKED HEADING CHECK
    /*var headingCheck = function(){
        $('.cms-content h3').each(function(){
            var html;
            if ($(this).find('span:not(.space)').height() >= 60 ) {
                html = $(this).html().replace('<br>', '<span class="space"></span>');
                $(this).html(html)
            } else {
                html = $(this).html().replace('<span class="space"></span>', '<br>');
                $(this).html(html)
            }
        })
    };

    headingCheck();
    $(window).on('resize', function(){
        headingCheck();
    });*/

    // CHALLENGE US
    var challengeUs = $('#challenge-us');

    $('.btn-challenge').on('click', function(){
        challengeUs.addClass('open');
        $('html').addClass('noscroll')
    });

    if (!$('.wpcf7-response-output').hasClass('wpcf7-display-none')) {
        challengeUs.addClass('open');
        $('html').addClass('noscroll')
    }

    challengeUs.find('.close').on('click', function(){
        challengeUs.removeClass('open');
        $('html').removeClass('noscroll')
    });

    challengeUs.on('click', function(){
        challengeUs.removeClass('open');
        $('html').removeClass('noscroll')
    }).on('click', 'div', function(e){
        e.stopPropagation()
    });

    var challengeHeight = function(){
        if (challengeUs.find('.challenge').height() >= $(window).height() - 100) {
            challengeUs.addClass('scroll');
        } else {
            challengeUs.removeClass('scroll');
        }
    };

    challengeHeight();
    $(window).on('resize', function(){
        challengeHeight();
    });

    // MAIN CONTENT BOTTOM ALIGN
    var contentAlign = function(){
        var bottomAlign = $('.bottom-align');

        bottomAlign.imagesLoaded(function(){
            if ($(window).width() >= 768 ){
                var iconHeight = bottomAlign.find('img').height();
                bottomAlign.find('h2').css('padding-bottom', iconHeight+'px');
            } else {
                bottomAlign.find('h2').css('padding-bottom', '');
            }
        })
    };

    contentAlign();
    $(window).on('resize', function(){
        contentAlign();
    });

    /* masonry for blog */

    var container = $('#news .posts');

    var options = {
        itemSelector: '.post',
        resize: 'true',
        gutter: 0,
        horizontalOrder: true,
    };

    container.imagesLoaded( function() {
        container.masonry(options);
    });

    container.infinitescroll({
            navSelector  : '.paginate',
            nextSelector : '.paginate a',
            itemSelector : '.post'
        },
        function( newElements ) {
            $(newElements).hide();
            $(newElements).imagesLoaded( function() {
                $(newElements).show();

                container.masonry('appended', newElements );

                $('.spinner-cont').hide();

                var newPosts = true;

                $(newElements).each(function(index) {
                    if($(this).hasClass('last-posts')) {
                        newPosts = false;
                    }
                });

                if(newPosts){
                    $('.paginate').show();
                }
            });
        });

    $(window).unbind('.infscr');

    $('.paginate a').click(function() {
        $('.paginate').hide();
        $('.spinner-cont').show();

        container.infinitescroll('retrieve');

        return false;
    });

    // INFINITE SCROLL
    var infinScroll = function(){
        if ($('.paginate').length >= 1) {
            var paginate = $('.paginate');
            var winHeight = $(window).height();
            var winScrolltop = $(window).scrollTop()
            var offset = paginate.offset().top
            var height = paginate.height();

            var distance = winHeight + winScrolltop - offset;

            if (distance >= 100 && paginate.is(':visible')) {
                $('.paginate a').trigger('click')
            }
        }
    }

    infinScroll();
    $(window).on('resize scroll', function(){
        infinScroll();
    })

    // mmenu
    $('#mobile-menu').mmenu({
        counters: true,
        offCanvas: {
            position: "left",
            zposition: "front",
        }
    }, {
        classNames: {
            fixedElements: {
                fixed: "fixed"
            }
        }
    });

    var API = $("#mobile-menu").data("mmenu");

    $(".mobile-nav a").click(function() {
        API.close();
    });

    /* LINE_SPLIT */

    var lineSplit = function(){
        $('.cms-content h3 span, .cms-content h2 span, .cms-content h1 span, #challenge-us h3 span, #news .post.blog h2 span, #news .post .categories span, #post .categories span, #post .post-meta span').each(function(){
            var d = $(this);

            d.parent().css('width', '');
            var parentWidth = d.parent().width();
            d.parent().width(parentWidth - 10);

            d.find('.ri-br-return').remove();

            d.html(d.html().replace('<span class="ri-br"></span><br><span class="ri-br"></span>', '<br>'))

            if (d.html().indexOf('ri-br') >= 0) {
                d.find('span').remove();
                d.find('br').remove();
            }


            if (d.html().indexOf('<br>') >= 0 && $(window).width() >= 480 ) {
                d.html(d.html().replace('<br>', '<span class="ri-br ri-br-return"></span><br><span class="ri-br ri-br-return"></span>'));
            } else {
                d.html(d.html().replace('<br>', ' '));
                var t = d.html().replace('<br>', ' ');
                var w = t.split(' ');



                d.html(w[0]);
                var height = d.height();
                for(var i = 1; i < w.length; i++){

                    d.html(d.html() + ' ' + w[i]);

                    if(d.height() > height){
                        d.html(d.html().replace(w[i], '<span class="ri-br"></span><br><span class="ri-br"></span>' + w[i] ));

                        height = d.height();
                    }
                }
            }

            d.parent().width(parentWidth);
        });
    }

    lineSplit();
    $(window).on('resize', function(){
        lineSplit();
    });
});