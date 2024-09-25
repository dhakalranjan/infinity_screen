Cypress.Commands.add("verifyMessage", (value) => {
  cy.get("#message").should("contains.text", value);
});
