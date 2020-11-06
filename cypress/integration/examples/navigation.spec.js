/// <reference types="cypress" />

context('Navigation', () => {
  describe('Menu navigation', () => {
    before(() => {
      cy.visit('localhost:8000');
    });

    describe('Correct menu elements navigation', () => {
      before(() => {
        cy.get('a[href="#experience"]')
          .click();
      });

      it('Should have the correct url', () => {
        cy.url().should('include', '/#experience');
      });

      it('Should select the correct menu element', () => {
        cy.get('a[href="#experience"] li')
          .should('have.class', 'selected');
      });

      it('Should display the correct element on the screen', () => {
        cy.get('#experience')
          .should('be.visible');
      });
    });
  });
});