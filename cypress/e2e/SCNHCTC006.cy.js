import 'cypress-file-upload'
import {faker} from "@faker-js/faker"

describe('tambah Cabang KCO', () => {
  it('passes', () => {
    cy.visit('https://mpower-dev.mandalafinance.com/signin')
    cy.get('#signin_nokar').type('0000031')
    cy.get('#signin_password').type('Mfin!123')
    //cy.screenshot("Login Page")
    cy.get('#signin_button').click()
    cy.wait(4000)
    cy.get('.pl-1').click()
    cy.get('.dropdown-menu-lg > :nth-child(4)').click()
    cy.get(':nth-child(7) > .selection-cell > .selection-input-4').click()
    cy.get('.btn-modal-yes').click()
    cy.get('tr > :nth-child(1) > .btn').click()
    cy.get('.d-flex > :nth-child(2) > .mx-1').click()
    cy.get('input[type=file]').attachFile("test.pdf", {wait:3000})
    cy.get(':nth-child(6) > :nth-child(2) > .input').type('NIB-0003127')
    cy.get('.react-datepicker__input-container > .input-group > .form-control').click()
    cy.get(':nth-child(1) > .react-datepicker__day--001').click()
    cy.get(':nth-child(8) > .col-md-6 > .input').type('08123671351')
    cy.get(':nth-child(10) > :nth-child(1) > .input').type('08123671234')
    cy.get(':nth-child(10) > :nth-child(2) > .input').type('08123762124')
    cy.get(':nth-child(12) > .col-md-6 > .input').type('dicky777@yopmail.com')
    cy.get(':nth-child(17) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').type('BANK BRI{enter}')
    cy.get(':nth-child(17) > :nth-child(2) > .input').type('218736178322')
    cy.get(':nth-child(17) > :nth-child(3) > .input').type('Bagas')
    cy.get(':nth-child(29) > :nth-child(1) > .font-size-sm > .justify-content-between > .text-right > .hover-scale-sm').click()
    cy.get('input[name=front_image]').attachFile("challenge.jpeg", {wait:1000})
    cy.get(':nth-child(29) > :nth-child(2) > .font-size-sm > .justify-content-between > .text-right > .hover-scale-sm').click()
    cy.get('input[name=front_office_image]').attachFile("FashionPria.jpeg", {wait:1000})
    cy.get(':nth-child(31) > :nth-child(1) > .font-size-sm > .justify-content-between > .text-right > .hover-scale-sm').click()
    cy.get('input[name=warehouse_image]').attachFile("merahputih.jpg", {wait:1000})
    cy.get(':nth-child(33) > .col-md-6 > .input-group > .input').type('2.5')
    cy.get(':nth-child(35) > :nth-child(1) > .input').type('300')
    cy.get(':nth-child(35) > :nth-child(2) > .input').type('250')
    cy.get(':nth-child(37) > :nth-child(1) > .input').type('1')
    cy.get(':nth-child(37) > :nth-child(2) > .input').type('1')
    cy.get(':nth-child(39) > :nth-child(1) > .input-group > .input').type('450000000')
    cy.get(':nth-child(39) > :nth-child(2) > .input').type('750000000')
    cy.get('.btn-footer > .btn').click()
    cy.get('.btn-modal-yes').click()
    })
})