const { fixtures } = require("../hooks/Fixtures")

exports.LoginPage = class LoginPage{
    constructor(){
         this.signInLink = fixtures.page.getByRole('link',{name: 'Sign in'})
         this.usernameInput = fixtures.page.locator("//input[@name='username']")
         this.passwordInput = fixtures.page.locator("//input[@name='password']")
         this.submitButton = fixtures.page.locator("//input[@type='submit']")
    }
 
    async launchUrl(){
        //console.log("in ste: "+ process.env.BASEURL);
        //await fixtures.page.goto('https://dsportalapp.herokuapp.com')
        await fixtures.page.goto(process.env.BASEURL)
        await fixtures.page.getByRole('button',{name:"Get Started"}).click()
        
    }
    async login(username, password){
        await this.signInLink.click()
        await this.usernameInput.fill(username)

        await this.passwordInput.fill(password)

        await this.submitButton.click()
    }

}