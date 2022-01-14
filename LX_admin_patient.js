///<reference types="cypress"  />

describe('lx medical admin patient ',function()    //describes heading for display
{
    it('verify UI of the application',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
        cy.get('.mt-3 > .flex > div').click()
        cy.get('.space-y-4 > .bg-white').click()
})
it('verify search bar  functionality',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
        cy.get('.mt-3 > .flex > div').click()
        cy.get(':nth-child(2) > .flex-shrink-0 > svg').click()
        cy.get('form > .bg-white > .ml-1').type('William Shakespere')
})
it('verify filter button functionality by choosing any filter option',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
        cy.get('.mt-3 > .flex > div').click()
        cy.get(':nth-child(2) > .flex-shrink-0 > svg').click()
       
        
})
it('verify add new patient button ',function()   //title
{
    cy.visit("https://qa.rch.build-release.com/admin")        //visits url
    cy.get('[name=email]').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    cy.get('[type=submit]').click()
    
})
}) 