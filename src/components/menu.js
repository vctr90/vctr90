import React, { useEffect } from 'react';
import $ from 'jquery';

const InitializeMenuController = () => {
  const $menuToggle = document.querySelector('#toggle-button');
  const $menu = document.querySelector('#menu');
  const $menuElements = $menu.querySelectorAll('ul li');
  const manualScrollEvent = 'DOMMouseScroll mousewheel';

  const triggerMenuToggle = () => $menu.classList.toggle('show-menu');


  const navigateToSection = (event) => {
    cleanMenuSelection();
    event.currentTarget.classList.toggle('selected');
    triggerMenuToggle();
  };

  const cleanMenuSelection = () => $menuElements.forEach(($menuElement) => $menuElement.classList.remove('selected'));

  $menuToggle.onclick = triggerMenuToggle;
  $menuElements.forEach(($menuElement) => $menuElement.onclick = navigateToSection);

  $(window).on(manualScrollEvent, () => {
    const scrollDistance = $(window).scrollTop();

    const $sections = $('.section');
    $sections.each(function (currentSectionIndex) {
      if ($(this).position().top <= scrollDistance) {
        $('#menu a li.selected').removeClass('selected');
        $('#menu a li').eq(currentSectionIndex).addClass('selected');
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