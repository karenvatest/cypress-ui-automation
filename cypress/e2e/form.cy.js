describe("Forms", () =>{

    it('Should display form fields correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').should('be.visible').and('be.enabled');
        cy.get('#forms-title').should('be.visible').and('be.enabled');
        cy.get('#forms-first-name').should('be.visible').and('be.enabled');
        cy.get('#forms-last-name').should('be.visible').and('be.enabled');
        cy.get('#forms-dob').should('be.visible').and('be.enabled');
        cy.get('#forms-doj').should('be.visible').and('be.enabled');
        cy.get('#forms-email').should('be.visible').and('be.enabled');
        cy.get('#forms-phone-code').should('be.visible').and('be.enabled');
        cy.get('#forms-phone-number').should('be.visible').and('be.enabled');
        cy.get('#forms-comm-email').should('be.visible').and('not.be.checked');
        cy.get('#forms-comm-phone').should('be.visible').and('not.be.checked');
    });

    it('Should fill the form correctly', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24-09-2026');
        cy.get('#forms-email').type('gisslun@gmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.get('#forms-title').should('have.value', 'Ms.');
        cy.get('#forms-phone-number').should('have.value', '2344534551');
        cy.get('#forms-last-name').should('have.value', 'Luna');
        cy.get('#forms-dob').should('have.value', '1996-09-24');
    });

    it('Should select phone communication option', () =>{
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-comm-phone').should('not.be.checked');
        cy.get('#forms-comm-phone').check().should('be.checked');
        cy.get('#forms-comm-email').should('not.be.checked');
    });

    it.only('Should submit form successfully', () => {
        cy.visit('https://www.qapractice.com/practice-forms');
        cy.get('#forms-submit').click();
        cy.contains('Country of Residence is required').should('be.visible');
        cy.contains('Title is required').should('be.visible');
        cy.contains('First Name is required').should('be.visible');
        cy.contains('Last Name is required').should('be.visible');
        cy.contains('Date of Birth is required').should('be.visible');
        cy.contains('Date of Joining is required (dd/mm/yyyy)').should('be.visible');
        cy.contains('Email Address is required').should('be.visible');
        cy.contains('Phone Number is required').should('be.visible');
        cy.contains('Please select a Communication Preference').should('be.visible');
        cy.get('#forms-country').select('Other');
        cy.get('#forms-title').select('Ms.');
        cy.get('#forms-first-name').type('Giss');
        cy.get('#forms-last-name').type('Luna');
        cy.get('#forms-dob').type('1996-09-24{enter}');
        cy.get('#forms-doj').type('24/09/2026');
        cy.get('#forms-email').type('gisslun@gmail.com');
        cy.get('#forms-phone-code').select('+Other');
        cy.get('#forms-phone-number').type('2344534551');
        cy.get('#forms-comm-phone').check();
        cy.get('#forms-submit').click();
        cy.contains('Details Successfully Added!').should('be.visible');
    });
})