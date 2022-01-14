///<reference types="cypress"  />

describe('lx medical admin sign in ',function()    //describes heading for display
{
    beforeEach(function(){
        cy.visit("https://qa.rch.build-release.com/admin")
    })
    it('verify UI of the application',function()   //title
    {
       
        cy.title().should('eq', 'LX Medical')  //verifies the title
        
   
})
it('verify signin functionality by entering valid email address and password.',function()   //title
{
   
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering blank email address and password',function()   //title
{
   
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').click('')
    cy.get(':nth-child(2) > .relative > .appearance-none').click('')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering valid email address and blank password.',function()   //title
{
    
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').click('')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering valid email address and invalid password.',function()   //title
{
    
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmin@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('abcghfdaADDF')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering  with invalid email address and valid password.',function()   //title
{
   
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering any email address and password with password less than 8 digits',function()   //title
{
    
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Passw')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering any email address and password with 8 or more alphabets  in password field',function()   //title
{
   
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('Password@123')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering any email address and password with 8 or more numeric digits in password field.',function()   //title
{
    
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('1234567890')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering any email and password with special characters(more than 8 digits) in password field.',function()   //title
{
    
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('*************')
    cy.get('.mt-3 > .flex > div').click()
    

})
it('verify signin functionality by entering any email and password with spaces   (more than 8 ) in password field.',function()   //title
{
   
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type('Rchadmigggn@yopmail.com')
    cy.get(':nth-child(2) > .relative > .appearance-none').type('     ')
    cy.get('.mt-3 > .flex > div').click()
    
})
})

        

    

