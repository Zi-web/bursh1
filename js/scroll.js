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

$(".menu__links-item--1").hover(function () {
    $('.menu__links').toggleClass("menu__links1");
 });

 $(".menu__links-item--2").hover(function () {
    $('.menu__links').toggleClass("menu__links2");
 });

 $(".menu__links-item--3").hover(function () {
    $('.menu__links').toggleClass("menu__links3");
 });

 $(".menu__links-item--4").hover(function () {
    $('.menu__links').toggleClass("menu__links4");
 });