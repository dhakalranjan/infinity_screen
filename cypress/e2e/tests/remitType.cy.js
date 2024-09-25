import { loginPage } from "../pages/login";
const login = new loginPage();
import { remitPage } from "../pages/remitType";
const remit = new remitPage();
describe("Remit Type Maintenance", () => {
  beforeEach(() => {
    cy.visit("http://192.168.50.44:8041/Public/Login.aspx");
    cy.login("admin", "1", "001{enter}");
  });
  it("login should be verified with right credentials", () => {});

  it("Screen should be redirect to expected screen", () => {
    const code = "11209";
    login.screenCodeAction(`${code}{enter}`);
    login.formNameCheck(code);
  });

  it("Remit should be saved with all correct field value", () => {
    const code = "11209";
    login.screenCodeAction(`${code}{enter}`);
    login.formNameCheck(code);
    cy.clickNew();
    remit.createRemit();
    cy.save()
  });
});
