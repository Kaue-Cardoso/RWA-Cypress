import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('RWA - Login Test', () => {
  it('Login - Fail', ()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyuser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  
  it('Login - Success', ()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyuser(userData.userSuccess.username, userData.userSuccess.password)
  })
  
  
})