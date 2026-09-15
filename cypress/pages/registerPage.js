class RegisterPage{
    selectorsList(){
        const selectors = {
            registerButton: '[data-test="signup"]',
            firstnameField: '[name="firstName"]',
            lastnameField: '[name="lastName"]',
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            confirmPasswordField: '[name="confirmPassword"]',
            submitButton: '[data-test="signup-submit"]',
            mismatchPassword: "#confirmPassword-helper-text"

        }
        return selectors
    }

    registerAccount(){
        cy.get(this.selectorsList().registerButton).click()
    }

    fillFields(firstname,lastname, username, password, confirmpassword){
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
    }
    confirmRegister(){
        cy.get(this.selectorsList().submitButton).click()
    }
    mismatchPassword(){
        cy.get(this.selectorsList().mismatchPassword)
    }
}
export default RegisterPage