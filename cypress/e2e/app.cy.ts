describe('Home Page', () => {
    it('Should navigate to the main page', () => {
      cy.visit('/')
    })

    it('Should check if the main text are correct', () => {
        cy.visit('/');
        cy.get('#main-text').contains('Build your best community starting from here.');
    })

    it('Should check if the button text are correct', () => {
        cy.visit('/');
        cy.get('#get-started-button').contains('Get Started');
    })

    it('Should check if the logo text are correct', () => {
        cy.visit('/');
        cy.get('#logo').contains('GathSession.');
    })

    it('Should check if the main image is displayed', () => {
        cy.visit('/');
        cy.get('#main-image').should('be.visible');
    })
  })