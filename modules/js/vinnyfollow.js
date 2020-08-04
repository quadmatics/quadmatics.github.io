(function ($) {
    $.fn.extend({
        vinnyFollow: function (options) {

            var defaults = {
                wrapper: 1260,
                class: 'vinny-line',
                zindex: 20,
                width: 1,
                lineWidth: 2,
                color: '#ffffff',
                alignClass: null,
                maxHeight: 200,
                flowColor: '#5cff00',
                flowTop: 230,
                responsiveOffset: 50
            };

            options = $.extend(defaults, options);

            var vinnyFollow = $(this);
            var lineContinueX = null;
            var winWidth = $(window).width();

            // RESET LINES FOR WINDOW RESIZE
            var reset = function(){
                lineContinueX = null;
                winWidth = $(window).width();
            };

            // CREATE LINES
            var init = function(){
                vinnyFollow.each(function(){

                    // INIT VARS
                    var element = $(this);
                    var color = options.color;
                    var offsetTop = 0;
                    var offsetLeft = 'auto';
                    var offsetBottom = 0;
                    var offsetRight = 'auto';
                    var angle = 0;
                    var origin = '0 0';
                    var offsetBottom2 = 0;
                    var angle2 = 0;
                    var line2 = false;
                    var followOn = false;
                    var horizontal = false;
                    var horizontalTop = 0;
                    var horizOffsetRight = 'auto';
                    var offsetBottom3 = 0;
                    var angle3 = 0;
                    var line3 = false;
                    var diagLeft = false;
                    var responsive = false;

                    // UPDATE VARS WITH DATA ELEMENTS
                    if (element.data('offset-top') != undefined) {
                        offsetTop = parseInt(element.data('offset-top'));
                    }
                    if (element.data('offset-left') != undefined) {
                        offsetLeft = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('offset-left'))+'px)';

                        if (winWidth <= 550) {
                            offsetLeft = '-'+parseInt(element.data('offset-left')) * 4+'px';
                        }
                    }
                    if (element.data('offset-bottom') != undefined) {
                        offsetBottom = parseInt(element.data('offset-bottom'));
                    }
                    if (element.data('offset-right') != undefined) {
                        offsetRight = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('offset-right'))+'px)';
                    }
                    if (element.data('angle') != undefined) {
                        angle = parseInt(element.data('angle'));
                    }
                    if (element.data('origin') == 'bottom') {
                        origin = '0 100%';
                    }
                    if (element.data('color') != undefined) {
                        color = element.data('color');
                    }
                    if (element.data('follow-on') != undefined) {
                        followOn = element.data('follow-on');
                    }
                    if (element.data('2-line') != undefined) {
                        line2 = element.data('2-line');
                    }
                    if (element.data('follow-on') != undefined) {
                        offsetRight = lineContinueX;
                    }
                    if (element.data('horizontal') != undefined) {
                        horizontal = true;
                    }
                    if (element.data('horizontal-top') != undefined) {
                        horizontalTop = parseInt(element.data('horizontal-top'));
                        if (winWidth <= 767){
                            horizontalTop = options.responsiveOffset;
                        }
                        offsetBottom = 'calc(100% - '+horizontalTop+'px)';
                    }
                    if (element.data('horizontal-offsetx') != undefined) {
                        horizOffsetRight = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('horizontal-offsetx'))+'px)'
                    }
                    if (element.data('3-line') != undefined) {
                        line3 = element.data('3-line');
                    }
                    if (element.data('diag-left-follow') != undefined) {
                        diagLeft = true;
                    }
                    if (element.data('responsive') != undefined) {
                        responsive = true;
                    }

                    // CREATE LINE 1
                    var html = '<div class="'+options.class+'"></div>';

                    if ( !$(this).find('.'+options.class).length ){
                        $(this).append(html)
                    }

                    $(this).find('.'+options.class+':not(.line-horiz)').css({
                        'width' : options.lineWidth+'px',
                        'position' : 'absolute',
                        'z-index' : options.zindex,
                        'top' : offsetTop,
                        'left' : offsetLeft,
                        'bottom' : offsetBottom,
                        'right' : offsetRight,
                        '-webkit-transform' : 'skewX('+angle+'deg)',
                        '-moz-transform' : 'skewX('+angle+'deg)',
                        '-ms-transform' : 'skewX('+angle+'deg)',
                        '-o-transform' : 'skewX('+angle+'deg)',
                        'transform' : 'skewX('+angle+'deg)',
                        '-webkit-transform-origin' : origin,
                        '-moz-transform-origin' : origin,
                        '-ms-transform-origin' : origin,
                        '-o-transform-origin' : origin,
                        'transform-origin' : origin,
                        'overflow' : 'hidden'
                    });

                    if(angle != 0) {
                        $(this).find('.'+options.class+':not(.line-horiz)').attr('skewed', '1');
                    }

                    // ALIGNMENT FOR ELEMENTS UNDERNEATH
                    if (options.alignClass != null && element.data('align-offset')) {
                        var alignOffset = parseInt(element.data('align-offset'));

                        if (winWidth <= 1250) {
                            alignOffset = 20;
                        }

                        var vinnyLine = element.find('.'+options.class);

                        var posRight = (winWidth - (vinnyLine.offset().left + vinnyLine.height())) - ((winWidth - options.wrapper) / 2 );

                        element.find(options.alignClass).css({
                            'width' : 'calc(((100vw - '+options.wrapper+'px) / 2) - '+alignOffset+'px + '+posRight+'px)'
                        })
                    }

                    // CREATE HORIZONTAL LINE
                    if ( horizontal == true ){
                        var lastElem = $(element).find('.'+options.class+':last-child');
                        var horizontalStart = (lastElem.offset().left + lastElem.height());

                        var horizontalOffsetLeft = 'calc('+ horizontalStart+'px + '+ ((options.lineWidth / 2)) +'px)';
                        horizOffsetRight = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('horizontal-offsetx'))+'px + '+ ((options.lineWidth / 2)) +'px)';

                        var html = '<div class="'+options.class+' line-horiz"></div>';

                        if ( !$(this).find('.line-horiz.'+options.class).length ){
                            $(this).append(html)
                        }

                        offsetBottom = 'calc(100% - '+horizontalTop+'px - '+ ((options.lineWidth / 2)) +'px)';

                        $(this).find('.line-horiz.'+options.class).css({
                            'height' : options.lineWidth+'px',
                            'position' : 'absolute',
                            'z-index' : options.zindex,
                            'right' : horizOffsetRight,
                            'bottom' : offsetBottom,
                            'left' : horizontalOffsetLeft,
                            'overflow' : 'hidden'
                        });
                    }

                    // CREATE LINE 2
                    if ( line2 == true ){
                        if (element.data('2-offset-bottom') != undefined) {
                            offsetBottom2 = element.data('2-offset-bottom');
                            offsetTop = 'calc(100% - '+offsetBottom+'px)'
                        }
                        if (element.data('2-offset-right') != undefined) {
                            offsetRight = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('2-offset-right'))+'px)';
                        }
                        if (element.data('2-offset-top') != undefined) {
                            offsetTop = element.data('2-offset-top');
                        }
                        if (element.data('2-angle') != undefined) {
                            angle2 = element.data('2-angle');
                        }

                        var html = '<div class="'+options.class+' line-2"></div>';

                        if ( !$(this).find('.line-2.'+options.class).length ){
                            $(this).append(html)
                        }

                        $(this).find('.line-2.'+options.class).css({
                            'width' : options.lineWidth+'px',
                            'position' : 'absolute',
                            'z-index' : options.zindex,
                            'top' : offsetTop,
                            'left' : offsetLeft,
                            'bottom' : offsetBottom2,
                            'right' : offsetRight,
                            '-webkit-transform' : 'skewX('+angle2+'deg)',
                            '-moz-transform' : 'skewX('+angle2+'deg)',
                            '-ms-transform' : 'skewX('+angle2+'deg)',
                            '-o-transform' : 'skewX('+angle2+'deg)',
                            'transform' : 'skewX('+angle2+'deg)',
                            '-webkit-transform-origin' : '0 0',
                            '-moz-transform-origin' : '0 0',
                            '-ms-transform-origin' : '0 0',
                            '-o-transform-origin' : '0 0',
                            'transform-origin' : '0 0',
                            'overflow' : 'hidden'
                        });

                        if(angle2 != 0) {
                            $(this).find('.line-2.'+options.class).attr('skewed', '1');
                        }
                    }

                    if ( followOn == true ){
                        var lastElem = $(element).find('.'+options.class+':last-child');
                        lineContinueX = (winWidth - (lastElem.offset().left + lastElem.height()) - options.lineWidth)
                    }

                    // CREATE LINE 3
                    if ( line3 == true ){
                        if (element.data('3-offset-bottom') != undefined) {
                            offsetBottom3 = element.data('3-offset-bottom');
                            offsetTop = 'calc(100% - '+offsetBottom2+'px)'
                        }
                        if (element.data('3-offset-right') != undefined) {
                            offsetRight = 'calc(((100vw - '+options.wrapper+'px) / 2) + '+parseInt(element.data('3-offset-right'))+'px)';
                        }
                        if (element.data('3-offset-top') != undefined) {
                            offsetTop = element.data('3-offset-top');
                        }
                        if (element.data('3-angle') != undefined) {
                            angle3 = element.data('3-angle');
                        }

                        var html = '<div class="'+options.class+' line-3"></div>';

                        if ( !$(this).find('.line-3.'+options.class).length ){
                            $(this).append(html)
                        }

                        $(this).find('.line-3.'+options.class).css({
                            'width' : options.lineWidth+'px',
                            'position' : 'absolute',
                            'z-index' : options.zindex,
                            'top' : offsetTop,
                            'left' : offsetLeft,
                            'bottom' : offsetBottom3,
                            'right' : offsetRight,
                            '-webkit-transform' : 'skewX('+angle3+'deg)',
                            '-moz-transform' : 'skewX('+angle3+'deg)',
                            '-ms-transform' : 'skewX('+angle3+'deg)',
                            '-o-transform' : 'skewX('+angle3+'deg)',
                            'transform' : 'skewX('+angle3+'deg)',
                            '-webkit-transform-origin' : '0 0',
                            '-moz-transform-origin' : '0 0',
                            '-ms-transform-origin' : '0 0',
                            '-o-transform-origin' : '0 0',
                            'transform-origin' : '0 0',
                            'overflow' : 'hidden',
                            'border-radius' : '2px'
                        });

                        if(angle3 != 0) {
                            $(this).find('.line-3.'+options.class).attr('skewed', '1');
                        }
                    }

                    // ALIGNMENT FOR DIAGONAL BACKGROUND
                    if ( diagLeft == true ) {

                        var next = element.next();

                        var lastElem = $(element).find('.'+options.class+':last-child');
                        var diagOffset = (winWidth - (lastElem.offset().left + lastElem.height()) - options.lineWidth);

                        next.find('.diag-left').css({
                            width: diagOffset+'px'
                        })
                    }
                })
            };

            // INIT LINES
            init();
            $(window).on('resize', function(){
                reset();
                init();
            });

            // CREATE COLOR
            var html = '<div class="vinnycolor"></div>';
            var vinnyLine = $('.vinny-line');
            vinnyLine.append(html);
            var vinnyV = $('.vinny-line:not(.line-horiz) .vinnycolor');
            var vinnyH = $('.line-horiz .vinnycolor');

            vinnyV.css({
                'position' : 'absolute',
                'left' : '0',
                'right' : '0',
                'top' : '0',
                'bottom' : '0',
                'margin' : '0 auto',
                'width' : options.width+'px',
                'background' : options.color
            });

            vinnyH.css({
                'position' : 'absolute',
                'left' : '0',
                'right' : '0',
                'top' : '0',
                'bottom' : '0',
                'margin' : 'auto 0',
                'height' : options.width+'px',
                'background' : options.color
            });

            $('#main-banner .vinnycolor').css('top', '1px');

            // CREATE FLOW
            var html = '<div class="vinnyflow"></div>';
            vinnyLine.append(html);
            var vinnyFlow = $('.vinny-line:not(.line-horiz) .vinnyflow');
            var vinnyHoriz = $('.line-horiz .vinnyflow');
            var distanceOffset = 0;

            vinnyLine.each(function() {

                if ( $(this).closest('.vinnyfollow').data('offset-reset') != undefined) {
                    distanceOffset = 0;
                }

                $(this).find('.vinnyflow').attr('data-distance-offset', distanceOffset);

                if ( $(this).hasClass('line-horiz') ){
                    distanceOffset += 200;
                }
            });

            var skewWidth;

            vinnyLine.each(function() {
                var element = $(this);

                if (element.attr('skewed') == 1) {
                    skewWidth = options.lineWidth / 2;
                } else {
                    skewWidth = options.lineWidth / 4;
                }

                if(!element.hasClass('line-horiz')){
                    element.find('.vinnyflow').css({
                        'width' : skewWidth+'px',
                        'border' : skewWidth+'px solid '+options.flowColor,
                    });
                } else {
                    element.find('.vinnyflow').css({
                        'height' : skewWidth+'px',
                        'border' : skewWidth+'px solid '+options.flowColor,
                    });
                }
            });

            vinnyFlow.css({
                'position' : 'absolute',
                'left' : '0',
                'right' : '0',
                'margin' : '0 auto',
                'height' : options.maxHeight+'px',
                'max-height' : options.maxHeight+'px',
                'background' : options.flowColor,
            });

            vinnyHoriz.css({
                'position' : 'absolute',
                'top' : '0',
                'bottom' : '0',
                'margin' : 'auto 0',
                'width' : '100%',
                'max-width' : '100%',
                'background' : options.flowColor,
            });

            vinnyFollow.each(function(){
                var element = $(this)

                if (element.data('color') != undefined) {
                    var color = element.data('color');

                    element.find('.vinnycolor').css('background', color);
                }
            });

            var flowAnim = function(){
                vinnyLine.each(function(){
                    var scrollTop = $(window).scrollTop();
                    var distanceOffset = parseInt($(this).find('.vinnyflow').data('distance-offset'));
                    var elementOffset = $(this).offset().top;
                    var distance = -(elementOffset - scrollTop) + options.flowTop - distanceOffset;

                    $(this).find('.vinnyflow').css('top', distance+'px');

                    if ( $(this).hasClass('line-horiz') ){

                        var horizDistance = 'calc('+distance+'px * ('+($(this).width() + (options.flowTop / 2)) / options.flowTop+'))';

                        $(this).find('.vinnyflow').css({
                            'left': horizDistance,
                            'top' : '0'
                        })
                    }
                })
            };

            flowAnim();
            $(window).on('scroll resize', function(){
                flowAnim();
            });
        }
    });
})(jQuery);