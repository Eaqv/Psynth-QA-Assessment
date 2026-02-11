import { loginPage } from '../pages/LoginPage';

describe('Cross-user Comparison', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should validate that images load for standard_user but fail for problem_user', () => {
        loginPage.login('standard_user', 'secret_sauce');
        cy.get('.inventory_item_img img').first()
            .should('have.attr', 'src').and('not.contain', 'sl-404');

        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

        loginPage.login('problem_user', 'secret_sauce');
        cy.get('.inventory_item_img img').first()
            .should('have.attr', 'src').and('contain', 'sl-404');
    });
});