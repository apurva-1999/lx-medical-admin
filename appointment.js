///<reference types="cypress"  />

describe('lx medical admin sign in ',function()    //describes heading for display
{
    it('verify appointment functionality with proper validation',function()   //title
    {
       cy.visit("https://qa.rch.build-release.com/admin")                                     //visits url
       cy.get('[name=email]').type('Rchadmin@yopmail.com')
       cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
       cy.get('.mt-3 > .flex > div').click()
       cy.get('.space-y-4 > :nth-child(2) > .truncate').click()
       cy.get('.break-words').click()
       cy.get('.appearance-none[type=text]').click()
       cy.get('.react-datepicker__day--015').click()
       cy.get(':nth-child(3) > .flex > .h-4').click()
       cy.get('.gap-x-3 > :nth-child(2) > .flex > .h-4').click()
       cy.get('.my-8 > .flex').click()
       
       
       
})
})