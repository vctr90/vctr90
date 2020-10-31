import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../legacy-styles/main.scss';

const Separator = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <hr style={{ margin: 0 }} />
  </div>
);

const MenuController = () => {
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="content">
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
      <div id="main-content">
        <div id="hi" name="hi" className="section">
          <div id="presentation-img">
            <div id="presentation-caption">
              <div className="regular-page-title">
                Victor Rivas
            </div>
              <Separator />
              <div className="regular-page-title">
                Software Developer
            </div>
            </div>
          </div>
          <div id="about">
            <div className="sub-section-container">
              <div className="title-container">
                <div className="regular-page-title">
                  Hi!
              </div>
                <Separator />
              </div>
              <div className="content-container">
                Hello, I am Victor Rivas and I love to transform electricity into code that delivers value to my users.
            </div>
            </div>
            <div className="sub-section-container">
              <div className="title-container">
                <div className="regular-page-title">
                  About!
              </div>
                <Separator />
              </div>
              <div className="content-container">
                I am a Venezuelan software developer who lives in Canada. I have been involved in projects of different
                nature.
                From tools to handle evaluations on agile team performance to health applications. I have been happily
                building
              software as a lifestyle and way to think.<br />
              I have work as a fullstack developer for 5 years and I am hungry for more. I have discovered that the more
              I learn,
              the more I need to learn.
            </div>
            </div>
            <div className="sub-section-container">
              <div className="title-container">
                <div className="regular-page-title">
                  Developer
              </div>
                <Separator />
              </div>
              <div className="content-container">
                As you may have guessed I am a Software Developer, specialized on web technologies.
                I am proud to say this is my 5th year of carreer and I am exited to learn
                more about great and interesting technologies and projects :)
            </div>
            </div>
            <div className="sub-section-container">
              <div className="title-container">
                <div className="regular-page-title">
                  Project Manager
              </div>
                <Separator />
              </div>
              <div className="content-container">
                Just in between us... I have also run as a project manager. It is amazing to see how
                helpful is to experience the technology creation from developer and project manager
                perspective.
            </div>
            </div>
          </div>
        </div>
        <div id="experience" name="experience" className="section">
          <div className="sub-section-container">
            <div className="title-container">
              <div className="regular-page-title">
                In the industry
            </div>
              <Separator />
            </div>
            <div className="content-container">
              <a href="https://bixlabs.com/" target="_blank">
                <div className="company-name">
                  Bixlabs (from 2015 - Present)
              </div>
                <div className="company-logo" id="company-logo-0">
                </div>
              </a>
            </div>
            <div className="content-container">
              <a href="https://www.barilliance.com/" target="_blank">
                <div className="company-name">
                  Barilliance (on 2015)
              </div>
                <div className="company-logo" id="company-logo-1">
                </div>
              </a>
            </div>
            <div className="content-container">
              <a href="http://enrivasa.herokuapp.com" target="_blank">
                <div className="company-name">
                  Enriva S.A. (from 2014 to 2015)
              </div>
                <div className="company-logo" id="company-logo-2">
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="technologies" name="technologies" className="section">
          <div className="sub-section-container">
            <div className="title-container">
              <div className="regular-page-title">
                Tech
            </div>
              <Separator />
            </div>
            <div className="content-container">
              <div className="company-logo" id="technologies-logo-0">
              </div>
            </div>
            <div className="content-container">
              <div className="company-logo" id="technologies-logo-1">
              </div>
            </div>
            <div className="content-container">
              <div className="company-logo" id="technologies-logo-2">
              </div>
            </div>
            <div className="content-container">
              <div className="company-logo" id="technologies-logo-3">
              </div>
            </div>
            <div className="content-container">
              <div className="company-logo" id="technologies-logo-4">
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" name="portfolio" className="section">
          <div className="sub-section-container">
            <div className="title-container">
              <div className="regular-page-title">
                Portfolio
            </div>
              <Separator />
            </div>
            <div className="content-container">
              <div className="reference-metadata">
                <div className="reference-title">Expenses tracker API</div>
                <div className="reference-description">It is an in-progress project which aim is to create a strong API for
                developers to create their own expenses managers.</div>
              </div>
              <a href="https://github.com/vctr90/expenses-tracker-api" target="_blank">
                <div className="reference-link">
                  <div className="reference-icon" />
                  <div className="reference-source">Github</div>
                </div>
              </a>
            </div>
            <div className="content-container">
              <div className="reference-metadata">
                <div className="reference-title">My wedding app</div>
                <div className="reference-description">When I got married. I just wanted to have a little fun creating my own
                invitations with a friend.</div>
              </div>
              <a href="https://github.com/vctr90/wedding-app" target="_blank">
                <div className="reference-link">
                  <div className="reference-icon" />
                  <div className="reference-source">Github</div>
                </div>
              </a>
            </div>
            <div className="content-container">
              <div className="reference-metadata">
                <div className="reference-title">SochessJs (old project)</div>
                <div className="reference-description">This was a project with an interesting concept of being a
                socket-connected half-boarded chess game which you could use in order to play quick games with your
                friends using Twitter as player ids.</div>
              </div>
              <a href="https://github.com/vctr90/sochessJs" target="_blank">
                <div className="reference-link">
                  <div className="reference-icon" />
                  <div className="reference-source">Github</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contact" name="contact" className="section">
          <div className="sub-section-container">
            <div className="title-container">
              <div className="regular-page-title">
                Contact
            </div>
              <Separator />
            </div>
            <div className="content-container">
              <a href="mailto:victor@vctrdev.com">
                <div className="contact-container">
                  <div className="contact-link">victor@vctrdev.com</div>
                  <div className="contact-logo-container">
                    <div className="contact-logo" id="contact-logo-0" />
                  </div>
                </div>
              </a>
            </div>
            <div className="content-container">
              <a href="https://twitter.com/vctr90" target="_blank">
                <div className="contact-container">
                  <div className="contact-link">@vctr90</div>
                  <div className="contact-logo-container">
                    <div className="contact-logo" id="contact-logo-1" />
                  </div>
                </div>
              </a>
            </div>
            <div className="content-container">
              <a href="https://github.com/vctr90" target="_blank">
                <div className="contact-container">
                  <div className="contact-link">https://github.com/vctr90</div>
                  <div className="contact-logo-container">
                    <div className="contact-logo" id="contact-logo-2" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="where" name="where" className="section">
          <div className="sub-section-container">
            <div className="vertical-half-container">
              <div className="title-container">
                <div className="regular-page-title">
                  Where
              </div>
                <Separator />
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199026.25819764996!2d-79.3013485648003!3d43.13278493916889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35054bb6a5a4b%3A0x37563636c082837!2sSt.+Catharines%2C+ON!5e0!3m2!1sen!2sca!4v1560639147081!5m2!1sen!2sca" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
