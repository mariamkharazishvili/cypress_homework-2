import testData from '../fixtures/correctData.json';


Cypress.Commands.add('registration', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.fa.fa-lock').click()
    cy.get('.signup-form > h2').should('be.visible')

    //registration form
    cy.get('[data-qa="signup-name"]').type(testData.name)
    cy.get('[data-qa="signup-email"]').type(testData.email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.title.text-center').first().should('be.visible')
    cy.get('#id_gender2').check()
    cy.get('[data-qa="password"]').type(testData.password)
    cy.get('[data-qa="days"]').select(testData.day)
    cy.get('[data-qa="months"]').select(testData.month)
    cy.get('[data-qa="years"]').select(testData.year)
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('#first_name').type(testData.firstName)
    cy.get('#last_name').type(testData.lastName)
    cy.get('#company').type(testData.Company)
    cy.get('#address1').type(testData.Address)
    cy.get('#address2').type(testData.Address2)
    cy.get('#country').select(testData.Country)
    cy.get('#state').type(testData.State)
    cy.get('#city').type(testData.City)
    cy.get('#zipcode').type(testData.zipCode)
    cy.get('#mobile_number').type(testData.mobile_num)
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains(' Logged in as ').should('be.visible')
    
  })


  Cypress.Commands.add('login', (email,password) => {

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
    
    
  
    
  })