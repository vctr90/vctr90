const $menuToggle = document.querySelector('#toggle-button');
const $menu = document.querySelector('#menu');
const $menuElements = $menu.querySelectorAll('ul li');

const triggerMenuToggle = () => $menu.classList.toggle('show-menu');

const navigateToSection = (event) => {
   cleanMenuSelection();
   triggerMenuToggle(); 
};

const cleanMenuSelection = () => $menuElements.forEach(($menuElement) => $menuElement.classList.remove('selected'));

$menuToggle.onclick = triggerMenuToggle;
$menuElements.forEach(($menuElement) => $menuElement.onclick = navigateToSection);

$(window).scroll(() => {
   const scrollDistance = $(window).scrollTop();

   const $sections = $('.section');
   $sections.each(function (currentSectionIndex) {
      if ($(this).position().top <= scrollDistance) {
         $('#menu a li.selected').removeClass('selected');
         $('#menu a li').eq(currentSectionIndex).addClass('selected');
      }
   });
}).scroll();