Cypress.Commands.add("clickNew", () => {
  cy.get("#ContentPlaceHolder1_img_New").click();
});
Cypress.Commands.add("save", () => {
  cy.get("#ContentPlaceHolder1_img_Save").click();
});
Cypress.Commands.add('query',()=>{
cy.get("#ContentPlaceHolder1_img_Query").click()
})
Cypress.Commands.add('approve',()=>{
cy.get("#ContentPlaceHolder1_img_Approve").click()
})