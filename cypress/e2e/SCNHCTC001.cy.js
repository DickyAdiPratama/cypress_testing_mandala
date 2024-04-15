
import 'cypress-file-upload'
import {faker} from "@faker-js/faker"

describe('Membuat Cabang Baru', () => {
  it('passes', () => {
    cy.visit('https://mpower-dev.mandalafinance.com/signin')
    cy.get('#signin_nokar').type('0000031')
    cy.get('#signin_password').type('Mfin!123')
    //cy.screenshot("Login Page")
    cy.get('#signin_button').click()
    cy.wait(4000)
    cy.get('.pl-2').click()
    cy.get('.dropdown-menu-lg > :nth-child(4)').click()
    cy.get(':nth-child(2) > .selection-cell > .selection-input-4').click()
    cy.get('.btn-modal-yes').click()
    cy.get('.app-header > :nth-child(1) > .navbar-toggler > .hamburger-box').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .sidebar-icon > img').click()
    cy.get('.show > :nth-child(1) > :nth-child(2) > .pointer > .sidebar-item-label').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .collapse > ul > li > a').click()
    cy.get('.app-sidebar--header > .navbar-toggler > .hamburger-box').click()
    cy.get('.card-header > .mx-1').click()
    cy.get('.d-flex > :nth-child(2) > .mx-1').click()
    cy.wait(3000)
    cy.get('input[type=file]').attachFile("Cuti.pdf", {wait:3000})
    cy.get('.card-body > :nth-child(1) > :nth-child(2) > .input').type('IM-00000126')
    //cy.screenshot("Form Cabang Page 1")
    cy.get(':nth-child(3) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('CABANG{enter}')
    //wajib edit
    cy.get(':nth-child(3) > :nth-child(2) > .input').type('CILEDUG 12')
    cy.get(':nth-child(5) > :nth-child(1) > .input').type('CID')
    //wajib edit
    cy.get(':nth-child(5) > :nth-child(2) > .d-flex > :nth-child(1) > .input').type('8018')
    //wajib edit
    cy.get(':nth-child(5) > :nth-child(2) > .d-flex > :nth-child(2) > .input').type('80018')
    cy.get(':nth-child(7) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('B{enter}')
    cy.get(':nth-child(7) > :nth-child(2) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('MOTOR{enter}')
    cy.get(':nth-child(2) > .form-check-label').click()
    //wajib edit
    cy.get(':nth-child(9) > .col-md-6 > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('CILEDUG{enter}')
    //wajib edit
    cy.get(':nth-child(11) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('JAWA 1{enter}')
    //wajib edit
    
    cy.get(':nth-child(11) > :nth-child(2) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('JAWA BARAT 1{enter}')
    cy.get('.input-group > .form-control').click()
    cy.get(':nth-child(1) > .react-datepicker__day--001').click()
    cy.get(':nth-child(3) > .mx-1').click()
    cy.get('.bg-input').type('KEDIRI, East Java, Java, Indonesia')
    cy.get('.search-container > ul > :nth-child(1)').click()
    cy.get('.modal-footer > .text-right > .mx-1').click()
    cy.get('.col-md-12 > .input').type('Jl.Probolinggo kota no 118, JAWA TIMUR')
    cy.get(':nth-child(19) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('JAWA TIMUR{enter}')
    cy.get(':nth-child(19) > :nth-child(2) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('KOTA PROBOLINGGO{enter}')
    cy.get(':nth-child(21) > :nth-child(1) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('MAYANGAN{enter}')
    cy.get(':nth-child(21) > :nth-child(2) > .css-dyr6gj-container > .css-1y4g20-control > .css-1hwfws3').click().type('JATI{enter}')
    cy.get(':nth-child(23) > :nth-child(2) > .d-flex > :nth-child(1) > .input').type('003')
    cy.get(':nth-child(23) > :nth-child(2) > .d-flex > :nth-child(2) > .input').type('007')
    //cy.screenshot("Form Cabang Page 2")
    cy.get('.my-3 > .mx-1').click()
    //cy.screenshot("Form Cabang Page 3")
    cy.get('.btn-modal-yes').click()
  })
})