import { faker } from '@faker-js/faker';
const remitName = faker.person.firstName()

class remitPage{
    remitElements={
        getRemit:() => cy.get("#txtRemitName"),
        getCash:() => cy.get("#ContentPlaceHolder1_ddlCash"),
        getBank:() => cy.get("#ContentPlaceHolder1_ddlIsBank"),
        getInTransit :() => cy.get("#txtIntransitGLName"),
        getIBT:() => cy.get("#txtIBTGLName"),
        getInterest:()=>cy.get("#ContentPlaceHolder1_ddlAllowedInterestCalculation")

    }
    createRemit(){
        const remit = this.remitElements
        remit.getRemit().type(remitName)
        remit.getCash().select("YES")
        remit.getInTransit().type(faker.finance.currencyName())
        remit.getIBT().type(faker.finance.pin())
    }
    approveRemit(){
        cy.query()
        const remit = this.remitElements
        remit.getRemit().type(remitName,{delay:50})
        cy.get(".ui-menu-item-wrapper").click();
        cy.approve()

    }
}
module.exports = {
    remitPage,
  };