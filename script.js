document.addEventListener("DOMContentLoaded", () => {
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');
    let sec1 = document.querySelector('.sec1');

    const fadeEffect = (element, opacity) => {
        element.style.opacity = opacity;
    };

    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        let section2Top = sec1.offsetTop;
        let viewportHeight = window.innerHeight;

        text1.style.marginTop = value * 2.5 + 'px';
        text2.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1.5 + 'px';

        const fadeOutPoint = section2Top - viewportHeight;

        // Apply fade-out effect when scrolling down and fade-in effect when scrolling up
        if (value >= fadeOutPoint) {
            let fadeValue = 1 - ((value - fadeOutPoint) / 200);
            fadeEffect(text1, fadeValue);
            fadeEffect(text2, fadeValue);
            fadeEffect(leaf, fadeValue);
            fadeEffect(hill1, fadeValue);
            fadeEffect(hill4, fadeValue);
            fadeEffect(hill5, fadeValue);
        } else {
            fadeEffect(text1, 1);
            fadeEffect(text2, 1);
            fadeEffect(leaf, 1);
            fadeEffect(hill1, 1);
            fadeEffect(hill4, 1);
            fadeEffect(hill5, 1);
        }
    });

    const animatedElements = document.querySelectorAll('.animated-text, .phrase, .description, .highlight');

    const resetOpacity = () => {
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 2s ease-in-out';
        });
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition > elementPosition) {
                element.style.opacity = '1';
            } else {
                element.style.opacity = '0';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    resetOpacity();
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const bunny = document.getElementById('bunny');

    function checkPosition() {
        const rect = bunny.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            bunny.style.opacity = 1;
            bunny.style.transform = 'translateY(0)'; /* Animate to original position */
        } else {
            bunny.style.opacity = 0;
            bunny.style.transform = 'translateY(100px)'; /* Reset to start position */
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Check position on initial load
});
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
(function () {
    "use strict";
 
    // define variables
    var items = document.querySelectorAll(".timeline li");
 
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
 
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
 
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel1-image');
    const dots = document.querySelectorAll('.dot');
    const names = document.querySelectorAll('.name');
    let currentIndex = 0;

    function showSlide(index) {
        const newIndex = (index + images.length) % images.length;
        document.querySelector('.carousel1-images').style.transform = `translateX(-${newIndex * 100 / images.length}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        names.forEach(name => name.classList.remove('active'));

        dots[newIndex].classList.add('active');
        names[newIndex].classList.add('active');

        currentIndex = newIndex;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-slide'));
            showSlide(index);
        });
    });

    names.forEach(name => {
        name.addEventListener('click', () => {
            const index = parseInt(name.getAttribute('data-slide'));
            showSlide(index);
        });
    });

    // Optionally, add auto-slide functionality
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


