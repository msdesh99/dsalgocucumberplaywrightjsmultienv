const {Browser,Context,expect} = require("@playwright/test")
const { pageFixture } = require("./PageFixture")
const { BeforeAll, Before,AfterAll,setDefaultTimeout, After,Status} = require("@cucumber/cucumber")
const { LoginPage } = require("../pages/LoginPage")
const { invokeBrowser } = require("../helper/browsers/BrowserManager")
require("dotenv").config()
const { createLogger } = require('winston')
const { getEnv } =require('../helper/env/env')
const fs = require('fs-extra')


let browser = Browser
let context = Context
//setDefaultTimeout(60*1000*2)

BeforeAll(async function() {
    console.log("in hooks");
    getEnv()
// browser = await firefox.launch({headless: !false})
    browser = await invokeBrowser()

})
Before(async function () {
    context = await browser.newContext()
       /*{ recordVideo: {
            dir: "test-results/videos",
        },
    })*/
    this.page = await context.newPage()
    pageFixture.page = this.page
    //pageFixture.logger = createLogger()
    pageFixture.loginPage = new LoginPage()
    pageFixture.loginPage.launchUrl()

        await expect(pageFixture.page).toHaveTitle('Numpy Ninja')
        await expect(pageFixture.page).toHaveURL('https://dsportalapp.herokuapp.com/')
        await pageFixture.loginPage.login('NinjaAlgo','@Algo123')
        await expect(pageFixture.page.getByRole('link',{name: 'NinjaAlgo'})).toBeVisible()
        await expect(pageFixture.page.getByRole('link',{name:'Sign out'})).toBeVisible()
        await expect(pageFixture.page.getByText('You are logged in')).toBeVisible()
        console.log("User Signed In.....");
        
})
After(async function({pickle, result}) {
//screenshot
    let img = Buffer
    let videoPath = String 
    if(result?.status == Status.FAILED){
         img = await pageFixture.page.screenshot({path:"./test-results/screenshots/"+ pageFixture.topic+".png"})
        //this.attach(img, "image/png")
       
        //videoPath = await pageFixture.page.video().path()
    }
    console.log("<--End of Scenario: "+pickle.name+ " is "+ result?.status +" -->")
    await pageFixture.page.close()
    await context.close()
    if(result?.status == Status.FAILED){
        await this.attach(img, "image/png")
        //await this.attach(
          //  fs.readFileSync(videoPath),'video/webm')
        

    }
})

AfterAll(async function(){
     console.log("context and page need to be cloesed.....");
    // await pageFixture.page.getByRole('link',{name:"Sign out",timeout:10000}).click()
    // console.log("User successfully Signed Out....");
    // expect(await pageFixture.page.getByText("Logged out successfully",{timeout: 4000})).toBeVisible()
   //await pageFixture.page.close()
     //await context.close()
})