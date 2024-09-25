class loginPage {
  elements = {
    getUsername: () => cy.get("#txt_username"),
    getPassword: () => cy.get("#txt_Password"),
    getCode: () => cy.get("#txt_Branch"),
    getButton: () => cy.get("#btn_Login"),
  };
  screenCode = {
    getScreenCode: () => cy.get("#txtScreenCode"),
  };
  formName = {
    getFormName: () => cy.get("#ContentPlaceHolder1_lblFormName"),
  };


  //declaring function with above constructor
  loginAction(username, password, code) {
    const login = this.elements;
    login.getUsername().type(username, { delay: 100 });
    login.getPassword().type(password, { delay: 100 });
    login.getCode().type(code, { delay: 100 });
    login.getButton().click();
    this.screenCode.getScreenCode().should("exist");
  }
  screenCodeAction(code) {
    this.screenCode.getScreenCode().type(code);
  }
  formNameCheck(value) {
    this.formName.getFormName().should("contains.text", value);
  }
}

module.exports = {
  loginPage,
};
