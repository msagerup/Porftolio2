var cssSelector = anime({
  targets: '#loader',
  translateX: {
    value: -1040,
    duration: 2000
  },
  height: {
    value: '+=100',
    duration: 800,
    easing: 'easeInOutSine'
  },
   width: {
    delay: 1800,
    value: '+=500',
    duration: 1200,
    easing: 'easeInOutElastic'
  },


});