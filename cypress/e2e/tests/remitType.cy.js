import { loginPage } from "../pages/login";
const login = new loginPage();
import { remitPage } from "../pages/remitType";
const remit = new remitPage();
describe("Remit Type Maintenance Page", () => {
  beforeEach(() => {
    cy.visit("http://192.168.50.44:8041/Public/Login.aspx");
    cy.login("admin", "1", "001{enter}");
  });
  context("Login Page Verify", () => {
    it("login should be verified with right credentials", () => {});
  });
  context("Remit Page Verify", () => {
    beforeEach(() => {
      const code = "11209";
      login.screenCodeAction(`${code}{enter}`);
      login.formNameCheck(code);
    });
    it("Screen should be redirect to expected screen", () => {});

    it("Remit should be saved with all correct field value", () => {
      cy.clickNew();
      remit.createRemit();
      cy.save();
      cy.get('[aria-describedby="message"]').within(() => {
        cy.verifyMessage("Remit Type Added Successfully");
        cy.get('[type="button"]').eq(1).click();
      });
    });
    it("Just Created Remit should be Approved", () => {
      remit.approveRemit();
      cy.verifyMessage("Remit Type Approved Successfully.");
    });
  });
});
