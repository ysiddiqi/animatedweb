const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display Mobile menu //

const mobileMenu =()=> {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}
menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
    return
}

if ((elem && window.innerWidth <960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
}
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }

}
 menuLinks.addEventListener('click', hideMobileMenu);
 navLogo.addEventListener('click', hideMobileMenu);



// DOM Properties

//  console.dir(document);
//  console.log(document.domain);
//  console.log(document.URL);
//  console.log(document.title);
//  console.log(document.doctype);
//  console.log(document.head);
//  console.log(document.body);
//  console.log(document.all);
//  console.log(document.all[48]);
//  console.log(document.forms);
//  console.log(document.links[2]);
// console.log(document.images);

// GetElementById //

// console.log(document.getElementById('header-title'));
// console.log(document.getElementById('mobile-menu'));

