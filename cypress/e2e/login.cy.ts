import { loginPage } from '../pages/LoginPage';

describe('Authentication Tests - SauceDemo', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with a standard user', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory');
  });

  it('should show error with locked out user', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

  it('should show error with invalid user', () => {
    loginPage.login('invalid_user', 'invalid_password');
    loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

});