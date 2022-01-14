/// <reference types="cypress" />

it('google tests',function(){
cy.visit('https://www.google.com/')
cy.get('.gLFyf').type('tourism{enter}')
cy.get('.MUFPAc > :nth-child(3) > a').click()
})
