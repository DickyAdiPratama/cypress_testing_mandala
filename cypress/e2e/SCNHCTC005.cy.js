import 'cypress-file-upload'
import {faker} from "@faker-js/faker"

describe('tambah Skema Cabang', () => {
  it('passes', () => {
    cy.visit('https://mpower-dev.mandalafinance.com/signin')
    cy.get('#signin_nokar').type('0000031')
    cy.get('#signin_password').type('Mfin!123')
    //cy.screenshot("Login Page")
    cy.get('#signin_button').click()
    cy.wait(4000)
    cy.get('.pl-2').click()
    cy.get('.dropdown-menu-lg > :nth-child(4)').click()
    cy.get(':nth-child(1) > .selection-cell > .selection-input-4').click()
    cy.get('.btn-modal-yes').click()
    cy.get('.app-header > :nth-child(1) > .navbar-toggler > .hamburger-box').click()
    cy.get(':nth-child(6) > :nth-child(1) > .pointer').click()
    cy.get(':nth-child(6) > :nth-child(1) > .collapse > ul > :nth-child(2) > a').click()
    cy.get('.app-sidebar--header > .navbar-toggler').click()
    cy.get(':nth-child(2) > .py-3').click()
    cy.get('div.d-flex > .dropdown > .d-flex').click()
    cy.get(':nth-child(1) > .text-uppercase').type('KCO')
    cy.get('[style="display: flex; flex: 1 1 0%; flex-direction: row; justify-content: flex-end; padding: 20px; border-top: 1px solid rgb(238, 238, 248);"] > .ml-2').click()
    cy.get('[style="position: sticky; background-color: rgb(244, 245, 253); left: -3px; z-index: 100;"] > .mx-1').click()
    cy.get('.text-white').click()
    cy.get('.bg-input').type('CILEDUG 3')
    cy.get('.d-flex > .btn').click()
    cy.get(':nth-child(9) > .selection-cell').click()
    cy.get('.btn-modal-yes').click()
    cy.get('.card-footer > .btn').click()
    })
})