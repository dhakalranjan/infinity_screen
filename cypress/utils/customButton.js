Cypress.Commands.add("clickNew", () => {
  cy.get("#ContentPlaceHolder1_img_New").click();
});
Cypress.Commands.add("save", () => {
  cy.get("#ContentPlaceHolder1_img_Save").click();
});
