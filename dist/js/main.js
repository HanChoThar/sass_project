const menuBtn = document.querySelector('.menuBtn');
const burger = document.querySelector('.menuBtn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

// let showMenu = false;
menuBtn.addEventListener('click', function(){
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  menuNav.classList.toggle('open');
  navItems.forEach(item => item.classList.toggle('open'));
});
