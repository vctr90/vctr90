import React, { useEffect } from 'react';
import $ from 'jquery';

const InitializeMenuController = () => {
  const $menuToggle = document.querySelector('#toggle-button');
  const $menu = document.querySelector('#menu');
  const $menuElements = $menu.querySelectorAll('ul li');
  //const manualScrollEvent = 'DOMMouseScroll mousewheel';
  const manualScrollEvent = 'scroll';

  const triggerMenuToggle = () => $menu.classList.toggle('show-menu');


  const navigateToSection = (event) => {
    cleanMenuSelection();
    event.currentTarget.classList.toggle('selected');
    triggerMenuToggle();
  };

  const cleanMenuSelection = () => $menuElements.forEach(($menuElement) => $menuElement.classList.remove('selected'));

  $menuToggle.onclick = triggerMenuToggle;
  //$menuElements.forEach(($menuElement) => $menuElement.onclick = navigateToSection);

  $(window).on(manualScrollEvent, () => {
    const scrollDistance = $(window).scrollTop();

    const $sections = $('.section');
    $sections.each(function($section) {
      const bounding = $section.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        console.log('scrollbar', scrollDistance);
        console.log('this top', $($section).position().top);
        console.log('--------------------------------------------------------');
        $('#menu a li.selected').removeClass('selected');
        $(`#menu a[href="#${$section.id}"] li`).addClass('selected');
        return;
      }
    });
  });
};

const Menu = () => {
  useEffect(InitializeMenuController);

  return (
    <div id="menu">
      <div id="main-box">
        <div id="avatar-area">
          <div id="avatar" />
        </div>
        <div id="menu-area">
          <ul>
            <a href="#hi">
              <li className='selected'>
                HI!
              </li>
            </a>
            <a href="#experience">
              <li>
                EXPERIENCE
              </li>
            </a>
            <a href="#technologies">
              <li>
                TECHNOLOGIES
              </li>
            </a>
            <a href="#portfolio">
              <li>
                PORTFOLIO
              </li>
            </a>
            <a href="#contact">
              <li>
                CONTACT
              </li>
            </a>
            <a href="#where">
              <li>
                WHERE?
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div id="toggle-button" />
    </div>
  );
};

export default Menu;