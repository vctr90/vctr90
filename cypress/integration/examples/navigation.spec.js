/// <reference types="cypress" />

context('Navigation', () => {
  describe('Menu navigation', () => {
    before(() => {
      cy.visit('localhost:8000');
    });

    describe('Default route', () => {
      const menuElemetnToTest = 'hi';

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