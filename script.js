//your JS code here. If required.
describe('Signup Modal Tests', () => {
  it('should open the modal when clicking the "Sign Up" button', () => {
    // Visit the page
    cy.visit('path-to-your-html-file.html');

    // Click the "Sign Up" button
    cy.get('button[data-bs-toggle="modal"]').click();

    // Assert that the modal becomes visible
    cy.get('#signupModal').should('be.visible');
  });

  it('should close the modal when clicking the close button', () => {
    // Open the modal
    cy.get('button[data-bs-toggle="modal"]').click();
    cy.get('#signupModal').should('be.visible');

    // Click the close button
    cy.get('.btn-close').click();

    // Assert that the modal is no longer visible
    cy.get('#signupModal').should('not.be.visible');
  });

  it('should close the modal when clicking the "Close" button in the footer', () => {
    // Open the modal
    cy.get('button[data-bs-toggle="modal"]').click();
    cy.get('#signupModal').should('be.visible');

    // Click the "Close" button in the footer
    cy.get('.modal-footer .btn-secondary').click();

    // Assert that the modal is no longer visible
    cy.get('#signupModal').should('not.be.visible');
  });

  it('should allow entering email, password, and confirm password', () => {
    // Open the modal
    cy.get('button[data-bs-toggle="modal"]').click();
    cy.get('#signupModal').should('be.visible');

    // Enter data into the form
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');

    // Assert that the form fields have the correct values
    cy.get('#email').should('have.value', 'test@example.com');
    cy.get('#password').should('have.value', 'password123');
    cy.get('#confirmPassword').should('have.value', 'password123');
  });
});
