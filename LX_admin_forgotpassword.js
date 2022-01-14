///<reference types="cypress"  />

describe('lx medical admin forgot password ',function()    //describes heading for display
{
    it('verify if verification code is sent on registered email id 1',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
        cy.title().should('eq', 'LX Medical')  //verifies the title
        cy.get('[type=submit]').click()
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get('[type=submit]').click()
        
   
})
it('verify if verification code is sent on registered email id 2',function()   //title
{

    cy.visit("https://yopmail.com/en/")        //visits url
    cy.get('#login').type('Rchadmin@yopmail.com')
    cy.get('#refreshbut > .md > .material-icons-outlined').click()
    

})
it('verify if verification code is sent on registered email keeping the email field as blank on forgot password page',function()   //title
{

    cy.visit("https://qa.rch.build-release.com/admin")        //visits url
    
    cy.get('a > .text-primary').click()
    cy.get('[name=email]')
    cy.get('.mt-5 > .flex').click()
    
    

})
it('verify if verification code is sent on unregistered email id',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
        
        cy.get('a > .text-primary').click()
        cy.get('[name=email]').type('Rchadminnn@yopmail.com')
        cy.get('.mt-5 > .flex').click()
        
   
})
it('verify if password can be changed if otp entered is invalid 1',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
       
        cy.get('a > .text-primary').click()
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get('.mt-5 > .flex').click()
        
   
})
it('verify if password can be changed if otp entered is invalid 2',function()   //title
{

    cy.visit("https://yopmail.com/en/")        //visits url
    cy.get('#login').type('Rchadmin@yopmail.com')
    cy.get('#refreshbut > .md > .material-icons-outlined').click()
    

})
it('verify if password can be changed if otp entered is invalid 3',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
       
        cy.get('a > .text-primary').click()
        cy.get('[name=email]').type('Rchadmin@yopmail.com')
        cy.get('.mt-5 > .flex').click()
        cy.get('.hidden > [style="display: flex; margin: 0px 0px 0px -0.5rem;"] > :nth-child(1) > input').type('334031')
        cy.get('.mt-5 > .flex').click()
        
   
})
it('verify resend code button functionality on enter verification code page 1',function()   //title
    {
        cy.visit("https://qa.rch.build-release.com/admin")        //visits url
       
        cy.get('a > .text-primary').click()
        cy.get('.appearance-none').type('Rchadmin@yopmail.com')
        cy.get('.mt-5 > .flex').click()
        cy.get('.hidden > [style="display: flex; margin: 0px 0px 0px -0.5rem;"] > :nth-child(1) > input').type('334031')
        cy.get('.mt-5 > .flex').click()
        cy.get('.mt-3 > .font-bold').click()
        
   
})
})
