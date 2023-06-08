export default class slickslider {
    constructor () {
      this.$this = $('.mod-slickslider')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick () {
      this.$this.find('.sliders').slick({
        rows: 0,
        adaptiveHeight: true,
        slidesToShow:3,
        dots:true,
        variableWidth: true,
        dotsClass: 'slicks-dots',
        prevArrow: '<button class="slicks-prev arrows"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slicks-next arrows  "><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>'
      })
    }
  }
  new slickslider().init()
  