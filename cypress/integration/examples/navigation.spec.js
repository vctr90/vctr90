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
        const menuElemetnToTest = 'hi';

        it('Should select the correct menu element', () => {
          cy.get(`a[href="#${menuElemetnToTest}"] li`)
            .should('have.class', 'selected');
        });

        it('Should display the correct element on the screen', () => {
          cy.get(`#${menuElemetnToTest}`)
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

      menuElementsToTest.forEach((menuElemetnToTest) => {
        describe(`Correct menu elements navigation ${menuElemetnToTest}`, () => {
          before(() => {
            cy.get(`a[href="#${menuElemetnToTest}"]`)
              .click();
          });

          it('Should have the correct url', () => {
            cy.url().should('include', `/#${menuElemetnToTest}`);
          });

          it('Should select the correct menu element', () => {
            cy.get(`a[href="#${menuElemetnToTest}"] li`)
              .should('have.class', 'selected');
          });

          it('Should display the correct element on the screen', () => {
            cy.get(`#${menuElemetnToTest}`)
              .should('be.visible');
          });
        });
      });
    });
  });
});