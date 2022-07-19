//Instantiate Scrolls
    const scroll = new SmoothScroll('#top, a[href*="#"]:not([data-easing])');

    if (document.querySelector('[data-easing]')) {
      var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});
    }

    // AOS initialised

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: false,
    });