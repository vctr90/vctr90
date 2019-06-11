const $menuToggle = document.querySelector('#toggle-button');
const $menu = document.querySelector('#menu');
const $menuElements = $menu.querySelectorAll('ul li');

const triggerMenuToggle = () => $menu.classList.toggle('show-menu');

const navigateToSection = (event) => {
   cleanMenuSelection();
   event.currentTarget.classList.toggle('selected');
   triggerMenuToggle(); 
};

const cleanMenuSelection = () => $menuElements.forEach(($menuElement) => $menuElement.classList.remove('selected'));

$menuToggle.onclick = triggerMenuToggle;
$menuElements.forEach(($menuElement) => $menuElement.onclick = navigateToSection);