var $ = require('jquery')

$('.toggle-js').click(function(t) {
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
  t.stopPropagation()
})

var windowHeight = $(window).height()
var top = $('.about').position().top + 200
$(window).on('scroll', function() {
  var scroll = $(window).scrollTop()
  if (windowHeight > top - scroll) {
    $('.about__main').addClass('show')
  } else {
  }
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000
        )
        return false
      }
    }
  })
})
/* == Handle modal
 * ========================================================================== */
;(function() {
  var $modal = $('[data-modal]')

  $('[data-beta-signup]').on('click', toggleModal)
  $('[data-close-modal]').on('click', closeModal)

  function toggleModal(e) {
    e.preventDefault()
    $modal.toggleClass('is-visible')
  }

  function closeModal() {
    $modal.removeClass('is-visible')
  }
})()
