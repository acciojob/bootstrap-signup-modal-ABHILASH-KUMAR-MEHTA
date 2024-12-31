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
});
