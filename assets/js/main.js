/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

/*=============== REMOVE MENU MOBILE ===============*/
if (navClose) {
   navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

// Close menu on link click
document.querySelectorAll('.nav__link').forEach(link => {
   link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
   const header = document.getElementById('header');
   window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUpBtn = document.getElementById('scroll-up');
   window.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll') : scrollUpBtn.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollDown = window.scrollY;
   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop    = current.offsetTop - 58,
            sectionId     = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass && sectionsClass.classList.add('active-link');
      } else {
         sectionsClass && sectionsClass.classList.remove('active-link');
      }
   });
};
window.addEventListener('scroll', scrollActive);

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

if (contactForm) {
   contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactMessage.textContent = 'Message sent! I\'ll get back to you soon. ✓';
      contactMessage.className = 'contact__message success';
      contactForm.reset();
      setTimeout(() => { contactMessage.textContent = ''; contactMessage.className = 'contact__message'; }, 4000);
   });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1200,
      delay: 100,
      reset: false,
   });

   sr.reveal('.home__data, .home__handle', { interval: 100 });
   sr.reveal('.home__social', { origin: 'left', delay: 300 });
   sr.reveal('.home__scroll', { origin: 'bottom', delay: 400 });

   sr.reveal('.about__img-wrapper', { origin: 'left' });
   sr.reveal('.about__data', { origin: 'right' });

   sr.reveal('.skills__group', { interval: 100 });
   sr.reveal('.experience__item', { origin: 'left', interval: 150 });
   sr.reveal('.projects__card', { interval: 120 });

   sr.reveal('.contact__data', { origin: 'left' });
   sr.reveal('.contact__form', { origin: 'right' });
}
