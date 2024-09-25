import { faker } from '@faker-js/faker';
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
        remit.getRemit().type(faker.finance.accountName())
        remit.getCash().select("YES")
        remit.getInTransit().type(faker.finance.currencyName())
        remit.getIBT().type(faker.finance.pin())
    }
}
module.exports= {
    remitPage
}