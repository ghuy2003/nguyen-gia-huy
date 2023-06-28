export default class slickPC {

    constructor () {
      this.$this = $('.mod-slickPC')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick (){
      this.$this.find('.sliderss').slick({
        'slidesToShow': 4,
        variableWidth: true,
        arrows: false,
        prevArrow: '<button class="slicks-prev arrows  text-blue-400"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slicks-next arrows  text-blue-400"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
        dots: false,
        slidesToScroll: 1,
        dotsClass:'slick-dotss',
        responsive: [
            {
            breakpoint: 800,
            settings: {
                'slidesToShow': 3,
                slidesToScroll: 1,
                infinite: true,      
                variableWidth: true,
                arrows: true,
                
                dots: true

            }
            
        },
        {
          breakpoint:430,
          settings: {
              'slidesToShow': 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: true,
              variableWidth: true,
              dots: true

          }

      } 
    ]      
});
    }
}
new slickPC().init()
// console.log('SlickSlider1');

  
  
  
  
  