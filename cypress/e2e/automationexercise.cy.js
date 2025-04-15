import testData from '../fixtures/correctData.json';   //import data for valid test cases
import wrongTestData from '../fixtures/incorrectData.json';  // import data for invalid test cases

describe('AutomationExercise Tests', () => {

  //it('registration',() =>{

    //cy.registration()  -- ამას ვაკომენტარებ,რადგან ერთძე მეტად გაშვებისას faild-ება იგივე მეილით რეგისტრირების გამო:)))
  //})


  beforeEach(() => {
  // go to login page
    cy.visit('https://automationexercise.com/')
    cy.get('#slider-carousel').should('be.visible')
    cy.get('.fa.fa-lock').click()
    cy.get('.login-form > h2').should('be.visible')
    
    
  });


  
  //test case #2: login with correct email and password

  it('Login with correct data',() =>{

    cy.login(testData.email,testData.password)
    cy.contains(`Logged in as ${testData.name}`).should('be.visible')

  })



   // test case #3: login with incorrect email and password 
  it('login with incorrect data',() =>{

    cy.login(wrongTestData.invalidEmail,wrongTestData.invalidPassword)
    cy.contains('Your email or password is incorrect!').should('be.visible')

  })

  
})
