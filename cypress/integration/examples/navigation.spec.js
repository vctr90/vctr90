/// <reference types="cypress" />

context('Navigation', () => {
  const sizes = ['iphone-x', [1920, 1080]];

  sizes.forEach(size => {
    describe(`Menu navigation at ${size} resolution`, () => {
      before(() => {
        cy.visit('localhost:8000');
        if (Cypress._.isArray(size)) {            
          const [ width, height ] = size;
          cy.viewport(width, height);
        } else {            
          cy.viewport(size);
        }
      });

      describe('Default route', () => {
        const menuElementToTest = 'hi';

        it('Should select the correct menu element', () => {
          cy.get(`a[href="#${menuElementToTest}"] li`)
            .should('have.class', 'selected');
        });

        it('Should display the correct element on the screen', () => {
          cy.get(`#${menuElementToTest}`)
            .should('be.visible');
        });
      });

      const menuElementsToTest = [
        'hi',
        'experience',
        'technologies',
        'portfolio',
        'contact',
        'where'
      ];

      menuElementsToTest.forEach((menuElementToTest) => {
        describe.only(`Correct menu elements navigation ${menuElementToTest}`, () => {
          before(() => {
            cy.get(`a[href="#${menuElementToTest}"]`)
              .click();
          });

          it('Should have the correct url', () => {
            cy.url().should('include', `/#${menuElementToTest}`);
          });

          it.only('Should select the correct menu element', () => {
            cy.get(`a[href="#${menuElementToTest}"] li`)
              .should('have.class', 'selected');
          });
        });
      });

      menuElementsToTest.forEach((menuElementToTest) => {
        describe(`Check menu selection when manually scrolling to ${menuElementToTest} menu element`, () => {
          before(() => {
            cy.get(`#${menuElementToTest}`).scrollIntoView();
          });

          it('Should select the correct menu element', () => {
            cy.get(`a[href="#${menuElementToTest}"] li`)
              .should('have.class', 'selected');
          });
        });
      });
    });
  });
});