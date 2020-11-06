/// <reference types="cypress" />

context('Navigation', () => {
  describe('Menu navigation', () => {
    before(() => {
      cy.visit('localhost:8000');
    });

    describe('Correct menu elements navigation', () => {
      const menuElemetnToTest = 'experience';
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