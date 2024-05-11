
const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');



  if (elSiteThemeToggler) {
  (localStorage.getItem('elSiteThemeToggler') === 'dark-mode');

  elSiteThemeToggler.addEventListener('click', function (){
    document.body.classList.add('dark-mode');
  });
   };

if (elSiteThemeToggler) {
  elSiteThemeToggler.addEventListener('click', function (evt) {
    evt.preventDefault();

    localStorage.setItem('elSiteThemeToggler', 'dark-mode');
  })};