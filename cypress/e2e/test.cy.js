
import 'cypress-file-upload'
import {faker} from "@faker-js/faker"

describe('test', () => {
  it('test', () => {
    cy.visit('mhub-uat.mantis.co.id')
    cy.get(':nth-child(1) > .form-control').type('it.operation.budget@mandalafinance.com')
    cy.get('#password').type('7gf7ew')
    cy.get('.btn-block').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .navbar-toggler > .hamburger-box').click()
    cy.get('.sidebar-navigation > :nth-child(3) > :nth-child(1) > :nth-child(1)').click()
    cy.get('.show > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.get(':nth-child(1) > :nth-child(1) > .show > :nth-child(1) > :nth-child(1) > .pointer').click()
    cy.get('.collapse > ul > :nth-child(3) > a').click()
    cy.get('.app-sidebar--header > .navbar-toggler').click()
    cy.get('.css-1u3dbue').click().should('be.visible')
    cy.get('#react-select-20-input').click()
  })
})