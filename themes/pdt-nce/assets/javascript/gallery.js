// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {
    
        var conf = {
            center: true,
            backgroundControl: false
        };
    
        var cache = {
            $carouselContainer: $('.thumbnails-carousel').parent(),
            $thumbnailsLi: $('.thumbnails-carousel li'),
            $controls: $('.thumbnails-carousel').parent().find('.carousel-control')
        };
    
        function init() {
            cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
            cache.$thumbnailsLi.first().addClass('active-thumbnail');
    
            if(!conf.backgroundControl) {
                cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
            }
            else {
                cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
            }
    
            if(conf.center) {
                cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
            }
        }
    
        function refreshOpacities(domEl) {
            cache.$thumbnailsLi.removeClass('active-thumbnail');
            cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
        }	
    
        function bindUiActions() {
            cache.$carouselContainer.on('slide.bs.carousel', function(e) {
                  refreshOpacities(e.relatedTarget);
            });
    
            cache.$thumbnailsLi.click(function(){
                cache.$carouselContainer.carousel($(this).index());
            });
        }
    
        $.fn.thumbnailsCarousel = function(options) {
            conf = $.extend(conf, options);
    
            init();
            bindUiActions();
    
            return this;
        }
    
    })(window, jQuery);
    
    $('.thumbnails-carousel').thumbnailsCarousel();

    //more images click
    $("#more").click(function() {
           

            var img ={$thumbnails: $("ul.thumbnails-carousel")};
            if(img.$thumbnails.height() == 95){
                img.$thumbnails.velocity({
                    height : img.$thumbnails[0].scrollHeight
                },400);

                $(".img-more").velocity({opacity: 0},150);
                $("#more").find(".img-next").velocity({rotateX:"180deg"},200);
                
            }
            else{

                img.$thumbnails.velocity({
                    height : 100
                },400);
                $(".img-more").velocity({opacity: 1},150);
                $("#more").find(".img-next").velocity("reverse",200);
                
            }
           
            
        
        });