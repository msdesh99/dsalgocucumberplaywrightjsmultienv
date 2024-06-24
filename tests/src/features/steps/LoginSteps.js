const{ test,expect} = require("@playwright/test")
const { Given, When, Then, setDefaultTimeout,pickle } = require("@cucumber/cucumber")
const { LoginPage } = require("../../pages/LoginPage")
const { fixtures } = require("../../hooks/Fixtures")
 
let loginPage
let username
let password
setDefaultTimeout(60*1000*2)
Given('User navigates to the application', async function () {   
     this.loginPage = new LoginPage(fixtures.page)
     fixtures.loginPage = this.loginPage
     console.log("User navigating the application");
     await expect(fixtures.page).toHaveTitle('NumpyNinja')
     await expect(fixtures.page).toHaveURL(/home/)
});
     
When('User enters the username', async function () {
     console.log("User Singing in.....");
     this.username = 'NinjaAlgo'
});

When('User enters the password', async function () {
     this.password = '@Algo123'
});

When('User clicks on login button', async function () {
     await fixtures.loginPage.login(this.username, this.password)
});

Then('User should logged in successfully', async function () {
           await expect(fixtures.page.getByRole('link',{name: 'NinjaAlgo'})).toBeVisible()
           await expect(fixtures.page.getByRole('link',{name:'Sign out'})).toBeVisible()
           await expect(fixtures.page.getByText('You are logged in')).toBeVisible()
           console.log("User Signed In.....");
});
Given('User Clicks {string} module', async function (moduleName) {
     console.log(`User Clicking ${moduleName}.....`);
     await fixtures.page.locator("//a[@class='nav-link dropdown-toggle']").click()
     await fixtures.page.getByRole('link',{name: 'Linked List'}).click()
});


