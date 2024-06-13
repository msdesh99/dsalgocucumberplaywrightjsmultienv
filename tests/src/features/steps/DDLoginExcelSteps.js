const{ test,expect} = require("@playwright/test")
const { Given, When, Then, setDefaultTimeout,pickle } = require("@cucumber/cucumber")
const { LoginPage } = require("../../pages/LoginPage")
const { pageFixture } = require("../../hooks/PageFixture")
const { ExcelReader } = require('../../utility/ExcelReader')

 
let loginPage
let username
let password
let loginDataArr
setDefaultTimeout(60*1000*2)
const excelReader = new ExcelReader()
excelReader.readData()
loginDataArr =  pageFixture.loginDataArr
pageFixture.topic="excel"


Given('User navigates to the login page application', async function () {
     await expect(pageFixture.page).toHaveTitle('NumpyNinja')
     await expect(pageFixture.page).toHaveURL(/home/)
     console.log("User navigating the application in ddloginstep");
     console.log("dir: "+ __dirname);
});
When('User enters the username for {string}', async function (scenarioNumber) {
     await pageFixture.page.getByRole('link',{name: 'Sign in'}).click()
     await expect(pageFixture.page).toHaveURL(/login/)
      username = loginDataArr[scenarioNumber].username
      //console.log("when user: "+username);
});
When('User enters the password for {string}', async function (scenarioNumber) {
      password = loginDataArr[parseInt(scenarioNumber)].password
});
When('User clicks on login button', async function () {
     //console.log(`Username: ${username} and Password: ${password} not valid`);
      await pageFixture.loginPage.login(username, password)
});
Then('User should get error message', async function () {
     await expect(pageFixture.page.getByText(`Invalid Username and Password`)).toBeVisible()
     await expect(pageFixture.page).toHaveURL(/login/)
     await expect(pageFixture.page).not.toHaveURL(/home/)
     //console.log(`Username: ${username} and Password: ${password} not valid`);
     console.log("User is not able Signed In due to invalid login credentials.....");
 });


