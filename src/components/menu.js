import React, { useEffect } from 'react';
import $ from 'jquery';

const InitializeMenuController = () => {

  /**
   * A workaround for an issue with the scroll in some versions chrome
   * 
   * Reference: https://stackoverflow.com/questions/38588346/anchor-a-tags-not-working-in-chrome-when-using
   */
  const fixChromeScrollIssue = () => {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (window.location.hash && isChrome) {
      setTimeout(function () {
        const hash = window.location.hash;
        window.location.hash = "";
        window.location.hash = hash;
      }, 300);
    }
  }

  fixChromeScrollIssue();

  const $menuToggle = document.querySelector('#toggle-button');
  const $menu = document.querySelector('#menu');

  const triggerMenuToggle = () => $menu.classList.toggle('show-menu');

  $menuToggle.onclick = triggerMenuToggle;

  const selectedMenuElementSelector = `#menu a li.selected`;

  // Implementation inspired from https://github.com/vctr90/cathypes.com/blame/master/src/components/shared/Header/NavMenu.js#L65

  const onScroll = function () {
    const scrollPosition = $(this).scrollTop() + 200;

    const sections = $('.section');

    sections.each(function () {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      const sectionBottom = sectionTop + $section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        if (scrollPosition <= sectionBottom) {
          // Clean all selections
          $(selectedMenuElementSelector).removeClass('selected');
        }

        // Select the matching section element
        $(`#menu a[href="#${$section.attr('id')}"] li`).addClass('selected');
      }
    });
  };

  $(document).on('scroll', onScroll);
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