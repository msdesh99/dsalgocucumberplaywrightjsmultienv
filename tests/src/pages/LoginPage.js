const { pageFixture } = require("../hooks/PageFixture")

exports.LoginPage = class LoginPage{
    constructor(){
         this.signInLink = pageFixture.page.getByRole('link',{name: 'Sign in'})
         this.usernameInput = pageFixture.page.locator("//input[@name='username']")
         this.passwordInput = pageFixture.page.locator("//input[@name='password']")
         this.submitButton = pageFixture.page.locator("//input[@type='submit']")
    }
 
    async launchUrl(){
        //console.log("in ste: "+ process.env.BASEURL);
        await pageFixture.page.goto('https://dsportalapp.herokuapp.com')
       // await pageFixture.page.goto(process.env.BASEURL)
        await pageFixture.page.getByRole('button',{name:"Get Started"}).click()
        
    }
    async login(username, password){
        await this.signInLink.click()
        await this.usernameInput.fill(username)

        await this.passwordInput.fill(password)

        await this.submitButton.click()
    }

}