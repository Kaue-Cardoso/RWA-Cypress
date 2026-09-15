class LoginPage{

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            buttonLogin: "[data-test='signin-submit']",
            wrongCredentialAlert: "[role = 'alert']"
        }

        return selectors
    }

    accessLoginPage(){
        cy.visit(" /signin ")
    }

    loginWithAnyuser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().buttonLogin).click()
    }
    checkAccessInvalid(){
     cy.get(this.selectorsList().wrongCredentialAlert)   
    }



}

export default LoginPage