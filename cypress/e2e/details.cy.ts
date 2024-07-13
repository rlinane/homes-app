describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/details/0');
    });
  
    it('has the correct title', () => {
      cy.title().should('equal', 'Details Page');
    });
  });