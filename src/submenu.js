// 마우스 오버 이벤트 처리
$(document).on('mouseover', '.topMenu', function() {
    // 요소의 배경색을 변경합니다.
    $(this).css('backgroundColor', '#858585');
    $('.submenu').stop().slideDown(300);
});

// 마우스 아웃 이벤트 처리
$(document).on('mouseout', '.topMenu', function() {
    // 요소의 배경색을 원래 색상으로 변경합니다.
    $(this).css('backgroundColor', '#000000');
    $('.submenu').stop().slideUp(300);
});

// 마우스 오버 이벤트 처리
$(document).on('mouseover', '.auto-slide .prev', function() {
    // 요소의 배경색을 변경합니다.
    $(this).css('backgroundColor', '#FFFFFF');
    $(this).css('color', '#1E1E1E')
});

// 마우스 아웃 이벤트 처리
$(document).on('mouseout', '.auto-slide .prev', function() {
    // 요소의 배경색을 원래 색상으로 변경합니다.
    $(this).css('backgroundColor', '#000000');
    $(this).css('color', '#FFFFFF')
});

// 마우스 오버 이벤트 처리
$(document).on('mouseover', '.auto-slide .next', function() {
    // 요소의 배경색을 변경합니다.
    $(this).css('backgroundColor', '#FFFFFF');
    $(this).css('color', '#1E1E1E')
});

// 마우스 아웃 이벤트 처리
$(document).on('mouseout', '.auto-slide .next', function() {
    // 요소의 배경색을 원래 색상으로 변경합니다.
    $(this).css('backgroundColor', '#000000');
    $(this).css('color', '#FFFFFF')

});

// 슬릭 슬라이드
$(function() {
    $('.auto-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="prev"><i class="fa-solid fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>'
    });
}

)