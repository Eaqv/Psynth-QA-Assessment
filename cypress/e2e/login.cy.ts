describe('Sanity Check - Saucedemo', () => {
  it('Debería cargar la página de inicio', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible')
  })
})