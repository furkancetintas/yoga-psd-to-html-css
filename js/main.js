let navbarEl = document.querySelector('.navbar');
console.log('navbarEl', navbarEl);
console.log('window.screen.width', window.screen.availWidth);

setInterval(() => {
  if (window.screen.width <= 991) {
    navbarEl.classList.add('bg-light');
  } else {
    navbarEl.classList.remove('bg-light');
  }
}, 1);
