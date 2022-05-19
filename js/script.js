

$(document).ready(function () {
    $('#btn').on('click', function () {
        $(this).toggleClass('active');
        });
    $('#btn').click(function(){
        $('.m-menu').toggleClass('m-menu-active');
    })
    var scroll = $(window).scrollTop();

    // header scroll 배경 이미지 바뀜 효과
    if (scroll >= 80) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

});
$(document).on('click', '.btn-scrolltop', function () {
    $('html, body').animate({
        scrollTop: '0'
    }, 400);
});