function menuBar() {
    const menu = document.querySelector('#menu');
    const close = document.querySelector('.close');
    const bars = document.querySelector('.bars');


    bars.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        close.classList.toggle('hidden');
        bars.classList.toggle('hidden');
    })

    close.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        close.classList.toggle('hidden');
        bars.classList.toggle('hidden');
    })
}
menuBar()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    dynamicBullets: true,
    
    },
    autoplay: {
      delay: 2500, // Adjust the delay as needed
      disableOnInteraction: false, 
    },
    loop: true,
    // Pause autoplay on hover
    on: {
      mouseenter: function () {
        swiper.autoplay.stop();
      },
      mouseleave: function () {
        swiper.autoplay.start();
      },
    },
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay:false,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
  
  
  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 0, // Set delay to 0 for continuous autoplay
      disableOnInteraction: false
    },
    speed: 5000, // Adjust the speed to control the smoothness
    loop: true,
    freeMode: true,
  });


  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });


  const tl = gsap.timeline()

  tl.from(".navbar", { 
     opacity: 0, 
     y: -100, 
     duration: 1,
     delay:1,
     stagger:1,
   });

   tl.from(".hero-section", { 
    opacity: 0, 
    duration: 1,
  });

  tl.from(".info-section", { 
    opacity: 0, 
    duration: 1,
  });

  gsap.from('.shop-section', {
    x:-120,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".shop-section",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.products', {
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".products",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.timer', {
    y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".timer",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.deals', {
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".deals",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.card', {
    y:100,
    stagger:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".card",
      scroller:"body",
      start:"top 50%",
      end: "top 60%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.testimonials', {
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".testimonials",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  
  gsap.from('.insta-section', {
    duration:0.5,
    opacity:0,
    scrollTrigger:{
      trigger:".insta-section",
      scroller:"body",
      start:"top 60%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.subscribe-txt', {
    y:100,
    stagger:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".subscribe-txt",
      scroller:"body",
      start:"top 60%",
      end: "top 50%",
      // markers:true,
      scrub:2,
    }
  })