


let today = new Date();
let hourNow = today.getHours();
let greet = document.querySelector('#greet');

if (hourNow >= 0 && hourNow <= 10) {
   greet.textContent = "MORNING";
} else if (hourNow >= 11 && hourNow <= 17) {
   greet.textContent = "AFTERNOON";
} else if (hourNow >= 16 && hourNow <= 23) {
   greet.textContent = "EVENING";
} else {
   greet.textContent = "DAY";
}


// INTRO ANIMATION
const tl = gsap.timeline({ default: { ease: 'Expo.easeInOut' } });

tl.to('.landing-content-1-txt span',
   { opacity: 1, y: "-10%", stagger: 0.10 });

tl.to('.landing-content-2',
   {
      opacity: 1, y: "0%", duration: 0.8, delay: 0.3, ease:
         Expo.easeInOut
   });

tl.to('.landing-content-3-txt-1',
   {
      opacity: 1, rotation: 0, ease: Expo.easeInOut, duration: 1
   }, "-=1");


tl.to('.landing-content-1-txt',
   {
      opacity: 0.09, rotation: 0, ease: Expo.easeInOut, duration: 1
   }, "-=1");

tl.to('.greet',
   { opacity: 1, y: "0%", stagger: 0.10 });

tl.fromTo('.propic',
   { opacity: 0 },
   { opacity: 1 }, "-=0.6");

tl.to('.landing-content-3-txt-2',
   {
      opacity: 1, y: "0%"
   }, "-=1.1")

tl.fromTo('.landing-content-3-txt-2 a',
   { opacity: 0 },
   {
      opacity: 1
   }, "-=0.5");

tl.to('header',
   { opacity: 1 });
tl.to('footer',
   { opacity: 1 }, "-=0.4");
tl.to('body', {
   overflow: 'auto'
})




// INTERSECTING OBSERVER

//ABOUT
const aboutContFunc = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('about-ani');
      } else {
         return;
      }
   });
}
const aboutObserver = new IntersectionObserver(aboutContFunc, {
   threshold: 0.2
   // rootMargin: "-600px 0px 0px 0px"
});
const aboutCont = document.querySelector('.about-content');
aboutObserver.observe(aboutCont);


// ABOUT ICONS
const aboutIconFunc = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.toggle('transy');
      } else {
         return;
      }
   })
}
const aboutIconObserver = new IntersectionObserver(aboutIconFunc, {
   threshold: 1,
})
const aboutIcons = document.querySelectorAll('.icon-wrapper');
aboutIcons.forEach(icon => aboutIconObserver.observe(icon));



// PROJECT
const projectFunc = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('project-ani');

         const projectItem = document.querySelectorAll('.project-link');
         tl.to(".project-link", { y: "0%", stagger: 0.25, duration: 0.2 });
      } else {
         return;
      }
   });
}
const projectObserver = new IntersectionObserver(projectFunc, {
   threshold: 0.7

});

const projectCont = document.querySelector('.project-content');
projectObserver.observe(projectCont);


// CONTACT
const contactFunc = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('contact-ani');

      } else {
         return;
      }
   });
}
const contactObserver = new IntersectionObserver(contactFunc, {
   threshold: 0.7
});

const contactCont = document.querySelector('.contact-content');
contactObserver.observe(contactCont);


// CONTACT LINK
const contLinktFunc = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('cont-link-ani');

      } else {
         entry.target.classList.remove('cont-link-ani');
      }
   });
}
const contLinkObserver = new IntersectionObserver(contLinktFunc, {
   threshold: 0.8
});

const contLinks = document.querySelectorAll('.contact-link');
console.log(contLinks)
contLinks.forEach(contLink => contLinkObserver.observe(contLink));



const slider = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');

   //animate toggle
   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-slide');
      burger.classList.toggle('toggle');

      //animate the links
      navLinks.forEach((links, index) => {
         if (links.style.animation) {
            links.style.animation = '';
         } else {
            links.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
         }
      });
   });
}
slider();





