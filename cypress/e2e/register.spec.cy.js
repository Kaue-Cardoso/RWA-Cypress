import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import userdata from "../fixtures/user-data.json"

const loginPage = new LoginPage()
const registerPage = new RegisterPage()


describe('RWA - Register Test', ()=>{
    it('Register - Fail', ()=>{
        loginPage.accessLoginPage()
        registerPage.registerAccount()
        registerPage.fillFields(
            userdata.registeruserSuccess.firstname,
            userdata.registeruserSuccess.lastname,
            userdata.registeruserSuccess.username,
            userdata.registeruserSuccess.password,
            userdata.registeruserSuccess.confirmpassword,
            
        )
    })
})