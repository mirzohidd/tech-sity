let tabs =$('[data-tab-target]')
let tabContents = $('.tab_content_item')
tabs.each(function(value,tab,aa) {
  $(tab).on('click', function () {
    
    let target =$(tab.dataset.tabTarget)
    tabContents.each(function(value,tabContent) {
      $(tabContent).removeClass('active')
    })
    target.addClass('active')
    console.log(target)

    $('.link.active').removeClass('active');
    $(this).addClass('active');
    console.log(target)
  })
  console.log(tab)

})

// function clearTabs(){
//   $('[data-tab-target].active').removeClass('active')

// }

$('.select_btn').on('click', function (e) {
  e.preventDefault();


  $(this).next('.select_list ').toggleClass('active')
})

$('.mobile_open_toggle').on('click', function (e) {
  e.preventDefault();
  $('.header_list').addClass('active')
})

$('.close_mobile_toggle').on('click', function (e) {
  e.preventDefault();
  $('.header_list').removeClass('active')
})


$('.select_item a').on('click', function (e) {
  e.preventDefault();
  // $('.select_list').removeClass('active')
  $(this).parent().find('.select_list').toggleClass('active')
})

// range2
$('#rangeslider-2').rangeslider({
  polyfill: false,
});
$('#rangeslider-2').on('change input', function () {
  $('#rangeslider-output-2').val($(this).val());
});

$('#rangeslider-3').rangeslider({
  polyfill: false,
});
$('#rangeslider-3').on('change input', function () {
  $('#rangeslider-output-3').val($(this).val());
});


let indicators = $('.progress_bar_indicator');
indicators.each(function (item, value) {
  // console.log(value)

  let currentVal = $(value).text();
  let currentWidth = $(value).width();

  $(value).parent().find('.progress_bar').css('width', currentVal + '%')
  $(value).css('left', 'calc(' + currentVal + '% - ' + currentWidth + 'px)')

  if ($(value).parent().find('.progress_bar').width() >= "1030") {

    $(value).parent().find('.progress_bar').css('border-radius', '7px')

  }

})



let inp = $('.rating__input');

$('.star-rating input').on('click', function (e) {
  $('.star').removeClass('active')
  $('.star-rating').removeClass('active')
  $(this).parent().find('label').toggleClass('active')
  $(this).parent().toggleClass('active')

})