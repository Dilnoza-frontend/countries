// const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

// elSiteThemeToggler.addEventListener('click', function (){
  // document.body.classList.toggle('dark-mode');
// });

const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

if (elSiteThemeToggler) {
  elSiteThemeToggler.addEventListener('click', function (evt) {
    evt.preventDefault();

    localStorage.setItem('elSiteThemeToggler', 'dark-mode');
  });

  if (localStorage.getItem('elSiteThemeToggler') === 'dark');

  elSiteThemeToggler.addEventListener('click', function (){
    document.body.classList.add('dark-mode');
});

};