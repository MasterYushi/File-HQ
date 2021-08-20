AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
  duration: 800,
  delay: 100,
});

//Carousel
let swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active"
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    512: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1250: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },
  mousewheel: true
});

let overlayBtn = document.querySelectorAll('.btn-overlay');
overlayBtn.forEach(btn => btn.addEventListener('click', () => {
  window.open('https://www.fylehq.com');
}));


// Form validation
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();


//Slide animation for project section

let currentActiveProject = document.querySelector('.project');
let activeSlider = document.querySelector('.active-slider')
let projectImg = document.querySelector('.project-img img');
let projects = document.querySelectorAll('.project');

projects.forEach((project, i) => {
  project.dataset.index = `${i}`;
});

projects.forEach(project => project.addEventListener('click', e => {
  let targetProject = e.target;

  currentActiveProject.classList.remove('active');
  targetProject.classList.add('active');
  currentActiveProject = targetProject;

  let projectIndex = targetProject.dataset.index;
  activeSlider.style.top = `${projectIndex*33}%`

  projectImg.setAttribute('src', currentActiveProject.dataset.img);
}));