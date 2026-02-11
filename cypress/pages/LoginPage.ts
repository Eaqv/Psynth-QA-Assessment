class LoginPage {
    private usernameInput = '[data-test="username"]';
    private passwordInput = '[data-test="password"]';
    private loginButton = '[data-test="login-button"]';
    private errorMessage = '[data-test="error"]';

    visit() {
        cy.visit('/');
    }

    typeUsername(username: string) {
        cy.get(this.usernameInput).type(username);
    }

    typePassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    login(username: string, password: string) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

    verifyErrorMessage(message: string) {
        cy.get(this.errorMessage).should('be.visible').and('contain.text', message);
    }
}

export const loginPage = new LoginPage();