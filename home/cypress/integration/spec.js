/// <reference types="cypress" />
it('pages load successfully', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/about')
    cy.visit('http://localhost:3000/contact')
})