describe("Login", () => {
  it("should allow successful login", () => {
    // Visit the login page
    cy.visit("http://192.168.50.44:8041/");

    // Fill in the login form page
    cy.get("#txt_username").type("admin");
    cy.get("#txt_Password").type("1");
    cy.get("#txt_Branch").type("001");
    cy.get("#txt_BranchName").type("Head Office");

    // Submit the login form
    cy.get("#btn_Login").click();

    // Search the screen code
    cy.get("#txtScreenCode").type("11194{enter}");

    // Click on new button
    cy.get("#ContentPlaceHolder1_img_New").click();

    //Click on search icon button
    cy.get("#showSubledgerGroupSearch").click();

    cy.get("#searchContainer.ui-dialog-content")
      .eq(1)
      .within(() => {
        cy.get(".txt-searchdata").type("{enter}", { force: true });
      });

    // Finds the <td> that contains 'SUNDRY DEBTORS' and double click on sundry debtors
    cy.get("table").contains("td", "SUNDRY DEBTORS").dblclick();

    // Click on search button
    cy.get("#showGLSearch").click();
    cy.get("#searchContainer1.ui-dialog-content")
    .eq(2)
    .within(() => {
      cy.get(".txt-searchdata").type("{enter}", { force: true });
    });
  });
});
