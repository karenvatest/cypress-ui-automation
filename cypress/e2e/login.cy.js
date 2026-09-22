describe("Login", () =>{

    it("Should login successfully with valid credentials", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123');
        cy.get('#login-submit').click();
        cy.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    it("Should show an error with invalid credentials", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user1@premiumbank.com');
        cy.get('#login-password').type('Bank@1');
        cy.get('#login-submit').click();
        cy.contains('Invalid email id and password').should('be.visible');
    });

    it('Should display login form correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').should('be.visible');
        cy.get('#login-password').should('be.visible');
        cy.get('#login-remember').should('be.visible').should('be.enabled');
        cy.get('#login-submit').should('be.visible').should('be.enabled');
    });

    it('Should select Remember Me checkbox', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-remember').should('not.be.checked');
        cy.get('#login-remember').check();
        cy.get('#login-remember').should('be.checked');
    });

    it('Should clear login form fields', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123');
        cy.get('#login-email').clear();
        cy.get('#login-password').clear();
        cy.get('#login-email').should('have.value', '');
        cy.get('#login-password').should('have.value', '');
    });

    it('Should login using Enter key', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').type('user@premiumbank.com');
        cy.get('#login-password').type('Bank@123{enter}');
        cy.contains('Login Successful! Welcome to Premium Banking.').should('be.visible');
    });

    it('Should show validation when login fields are empty', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-submit').click();
        cy.contains('Email and Password are required').should('be.visible');

    });
})