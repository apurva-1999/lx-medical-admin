///<reference types="cypress"  />

describe('lx medical admin dashboard ',function()    //describes heading for display
{
    
it('verify dashboard UI',function()   //title
{
    cy.visit("https://qa.rch.build-release.com/admin")        //visits url
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    cy.title().should('eq', 'LX Medical')  //verifies the title
})
it('verify dashboard functionality',function()   //title
{
    cy.visit("https://qa.rch.build-release.com/admin")        //visits url
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    
})
})
