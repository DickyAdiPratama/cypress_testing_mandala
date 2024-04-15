import 'cypress-file-upload'
import {faker} from "@faker-js/faker"

describe('Approve Pengajuan Cabang', () => {
  it('passes', () => {
    cy.visit('https://mpower-dev.mandalafinance.com/signin')
    cy.get('#signin_nokar').type('0000031')
    cy.get('#signin_password').type('Mfin!123')
    cy.screenshot("Login Page")
    cy.get('#signin_button').click()
    cy.wait(4000)
    cy.get('.pl-1').click()
    cy.get('.dropdown-menu-lg > :nth-child(4)').click()
    cy.get(':nth-child(3) > .selection-cell > .selection-input-4').click()
    cy.get('.btn-modal-yes').click()
    cy.get('.app-header > :nth-child(1) > .navbar-toggler > .hamburger-box').click()
    cy.get('.sidebar-navigation > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.get('.show > :nth-child(1) > :nth-child(1) > .pointer').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .collapse > ul > :nth-child(1)').click()
    cy.get('.app-sidebar--header > .navbar-toggler > .hamburger-box').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .mx-1').click()
    cy.get('.btn-primary').click()
    cy.get('.btn-modal-yes').click()

    })
})