const {Browser,chromium,Context,expect,Page} = require("@playwright/test")
const { fixtures } = require("./Fixtures")
const { BeforeAll, Before,AfterAll,setDefaultTimeout, After,Scenario,Status} = require("@cucumber/cucumber")
const { LoginPage } = require("../pages/LoginPage")
const { invokeBrowser } = require('../helper/browsers/BrowserManager')
const { getEnv } = require('../helper/env/env')

let browser = Browser
let context = Context
let page = Page
let loginPage  //= fixtures.LoginPage
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
    fixtures.page = page
    fixtures.loginPage = new LoginPage()
    await fixtures.loginPage.launchUrl()
})

After(async function({pickle}) {
//screenshot
fixtures.recordcount= fixtures.recordcount+1
    const img = await fixtures.page.screenshot({path:"./test-results/screenshots/loginNegativeScenario-"
        + ((fixtures.recordcount).toString())+fixtures.topic+".png"})
    this.attach(img, "image/png")
})

AfterAll(async function(){
     console.log("context and page need to be closed.....");
    //await fixtures.page.close()
     //await context.close()
})