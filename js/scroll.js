$('.menu__links-item').on('click', function(e){
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
e.preventDefault();
});

/*
$(function() {

    $(document).on('mousewheel', function(event) {

        var top = $(window).scrollTop() - (event.originalEvent.wheelDelta );

        event.preventDefault();

         $('html, body').stop().animate({

         scrollTop: top

        }, 400);

    })
})
*/