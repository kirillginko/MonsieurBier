// <-----------------load navbar ----------------------->
  // load_home();
  // async function load_home(){
  // document.getElementById("nav-placeholder").innerHTML = await (await fetch('navbar.html')).text();
  // };

  // $(function(){
  //   $("#nav-placeholder").load("navbar.html");
  // });
  // $(function(){
  //   $("#nav-footer").load("footer.html");
  // });

  // const navFooter = document.querySelectorAll('#nav-footer').load("footer.html");
  // load_home();
  // async function load_home(){
  // document.getElementById("nav-footer").innerHTML = await (await fetch('footer.html')).text();
  // };
// <---------------- Image carousel -------------------->
  $(document).ready(function() {
    $('#responsive').lightSlider({
        item:4,
        loop:false,
        slideMove:3,
        slideMargin: 10,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
  });

    $(document).ready(function() {
    $('#responsive1').lightSlider({
        item:4,
        loop:false,
        slideMove:3,
        slideMargin: 10,
        loop: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
  });

    //   $(document).ready(function() {
    //   var slider = $("#responsive").lightSlider();
    //   slider.goToSlide(3);
    //   slider.goToPrevSlide();
    //   slider.goToNextSlide();
    //   slider.getCurrentSlideCount();
    //   slider.refresh();
    //   slider.play();
    //   slider.pause();
    // });
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', ()=>{
//   if(counter >= carouselImages.length -1) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', ()=>{
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend', ()=>{
//   if (carouselImages[counter].id === 'lastClone') {
//   carouselSlide.style.transition = "none";
//   counter = carouselImages.length -2;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
//   if (carouselImages[counter].id === 'firstClone') {
//   carouselSlide.style.transition = "none";
//   counter = carouselImages.length - counter;
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }

// });
