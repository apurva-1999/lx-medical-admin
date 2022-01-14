///<reference types="cypress"  />

describe('lx medical admin sign in ',function()    //describes heading for display
{
    it('provider functionality ',function()   //title
    {
       cy.visit("https://qa.rch.build-release.com/admin")                                     //visits url
       cy.get('[name=email]').type('Rchadmin@yopmail.com')
       cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
       cy.get('.mt-3 > .flex > div').click()
       cy.get(':nth-child(3) > .truncate').click()
       cy.get(':nth-child(1) > :nth-child(7) > .flex > :nth-child(1)').click()

       

    })
})