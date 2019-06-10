const $menuToggle = document.getElementById('toggle-button');

const triggerToggle = (event) => {
    const $menu = event.currentTarget.parentElement;
    $menu.classList.toggle('show-menu');
};

$menuToggle.onclick = triggerToggle;