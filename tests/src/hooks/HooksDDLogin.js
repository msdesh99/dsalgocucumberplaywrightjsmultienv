const {Browser,chromium,Context,expect,Page} = require("@playwright/test")
const { pageFixture } = require("./PageFixture")
const { BeforeAll, Before,AfterAll,setDefaultTimeout, After,Scenario,Status} = require("@cucumber/cucumber")
const { LoginPage } = require("../pages/LoginPage")
const { invokeBrowser } = require('../helper/browsers/BrowserManager')
const { getEnv } = require('../helper/env/env')

let browser = Browser
let context = Context
let page = Page
let loginPage  //= pageFixture.LoginPage
let username
let password
setDefaultTimeout(60*1000*2)

BeforeAll(async function() {
    console.log("in ddloginhooks");
    //browser = await chromium.launch({headless: !false})
    getEnv()
    browser = await invokeBrowser()
   
})
Before(async function ({ pickle }) {
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = page
    pageFixture.loginPage = new LoginPage()
    await pageFixture.loginPage.launchUrl()
})

After(async function({pickle}) {
//screenshot
pageFixture.recordcount= pageFixture.recordcount+1
    const img = await pageFixture.page.screenshot({path:"./test-results/screenshots/loginNegativeScenario-"
        + ((pageFixture.recordcount).toString())+pageFixture.topic+".png"})
    this.attach(img, "image/png")
})

AfterAll(async function(){
     console.log("context and page need to be closed.....");
    //await pageFixture.page.close()
     //await context.close()
})