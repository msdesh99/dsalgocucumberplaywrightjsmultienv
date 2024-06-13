const{ test,expect} = require("@playwright/test")
const { Given, When, Then, setDefaultTimeout,pickle } = require("@cucumber/cucumber")
const { LoginPage } = require("../../pages/LoginPage")
const { pageFixture } = require("../../hooks/PageFixture")
 
let loginPage
let username
let password
setDefaultTimeout(60*1000*2)
Given('User navigates to the application', async function () {   
     this.loginPage = new LoginPage(pageFixture.page)
     pageFixture.loginPage = this.loginPage
     console.log("User navigating the application");
     await expect(pageFixture.page).toHaveTitle('NumpyNinja')
     await expect(pageFixture.page).toHaveURL(/home/)
});
     
When('User enters the username', async function () {
     console.log("User Singing in.....");
     this.username = 'NinjaAlgo'
});

When('User enters the password', async function () {
     this.password = '@Algo123'
});

When('User clicks on login button', async function () {
     await pageFixture.loginPage.login(this.username, this.password)
});

Then('User should logged in successfully', async function () {
           await expect(pageFixture.page.getByRole('link',{name: 'NinjaAlgo'})).toBeVisible()
           await expect(pageFixture.page.getByRole('link',{name:'Sign out'})).toBeVisible()
           await expect(pageFixture.page.getByText('You are logged in')).toBeVisible()
           console.log("User Signed In.....");
});
Given('User Clicks {string} module', async function (moduleName) {
     console.log(`User Clicking ${moduleName}.....`);
     await pageFixture.page.locator("//a[@class='nav-link dropdown-toggle']").click()
     await pageFixture.page.getByRole('link',{name: 'Linked List'}).click()
});


