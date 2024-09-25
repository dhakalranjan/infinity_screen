import {loginPage} from '../e2e/pages/login'
const login = new loginPage



Cypress.Commands.add('login',(username,password,code)=>{
    login.loginAction(username,password,code)
})