const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
let lastScrollTop = 0;
const header = document.querySelector('.main-header');
const hamburger = document.querySelector('.hamburger');

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

// Toggle mobile menu
function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('no-scroll');
    menu.classList.toggle('show-menu');
}

// Scroll event handler
function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }

    // console.log(scrollPos);
}

// Count up the counters
function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // get count target
            const target = +counter.getAttribute('data-target');
            // get current count
            const c = +counter.innerText;

            // create an increment
            const increment = target/100;

            // if counter is less then the target, add increment
            if (c < target) {
                // round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            }
            else {
                // Read prefix/suffix if present
                const prefix = counter.getAttribute('data-prefix') || '';
                const suffix = counter.getAttribute('data-suffix') || '';

                counter.innerText = prefix + target + suffix;
            }
        }

        updateCounter();
    });
}

// Reset counters
function reset() {
    counters.forEach((counter) => counter.innerText = '0');
}

// let lastScrollTop = 0;

// Hide header and hamburger menu on scroll down
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop <= 200) {
    // Always visible in the first 200px
    header.classList.remove('hide');
    hamburger.classList.remove('hide');
  } else {
    if (scrollTop > lastScrollTop) {
      // Scrolling down → hide
      header.classList.add('hide');
      hamburger.classList.add('hide');
    } else {
      // Scrolling up → show
      header.classList.remove('hide');
      hamburger.classList.remove('hide');
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// countUp();