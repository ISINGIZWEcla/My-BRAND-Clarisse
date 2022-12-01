const hamburger = document.getElementById('hamburger');
const navul= document.getElementById('nav-ul');

const menubutton=document.getElementById('menu-btn');
const menubar=document.getElementById('menub');

hamburger.addEventListener('click', () => {
  navul.classList.toggle('showNav');
});

menubutton.addEventListener('click', () => {
  menubar.classList.toggle('showbtn');
});

