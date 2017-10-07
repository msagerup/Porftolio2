var intro = anime({
  targets: '#loader',
  translateX: {
    value: -700,
    duration:1200,
     easing: 'easeOutExpo'
    
  },
  scaleX: {
    delay: 1900,
    value: 20,
    duration: 1000,
    easing: 'easeOutElastic'
  },
   scaleY: {
    delay: 800,
    value: 10,
    duration: 1000,
    easing: 'easeInOutElastic'
  }

});




document.querySelector('#loader_container').onclick = function (e) {
    intro.play();
    intro.reverse();

    var introCont = anime({
        targets: '#loader_container',
        translateY: -990,
        duration: 500,
        easing: 'easeInExpo',
        delay: 1800
    })
    
}
