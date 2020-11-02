import React, { useEffect } from 'react';
import $ from 'jquery';

const InitializeMenuController = () => {
  const $menuToggle = document.querySelector('#toggle-button');
  const $menu = document.querySelector('#menu');
  const $menuElements = $menu.querySelectorAll('ul li');

  const triggerMenuToggle = () => $menu.classList.toggle('show-menu');

  let clickedMenu = false;

  const navigateToSection = (event) => {
    cleanMenuSelection();
    event.currentTarget.classList.toggle('selected');
    setClicked();
    triggerMenuToggle();
  };

  const setClicked = () => {
    clickedMenu = true;
    setTimeout(() => {
      clickedMenu = false;
    }, 500)
  }

  const cleanMenuSelection = () => $menuElements.forEach(($menuElement) => $menuElement.classList.remove('selected'));

  $menuToggle.onclick = triggerMenuToggle;
  $menuElements.forEach(($menuElement) => $menuElement.onclick = navigateToSection);

  $(window).scroll(() => {
    if (!clickedMenu) {
      const scrollDistance = $(window).scrollTop();

      const $sections = $('.section');
      $sections.each(function (currentSectionIndex) {
        if ($(this).position().top <= scrollDistance) {
          $('#menu a li.selected').removeClass('selected');
          $('#menu a li').eq(currentSectionIndex).addClass('selected');
        }
      });
    }
  }).scroll();
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
              <li>
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