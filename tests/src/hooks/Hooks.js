const {Browser,Context,expect} = require("@playwright/test")
const { fixtures } = require("./Fixtures")
const { BeforeAll, Before,AfterAll,setDefaultTimeout, After,Status, pickle} = require("@cucumber/cucumber")
const { LoginPage } = require("../pages/LoginPage")
const { invokeBrowser } = require("../helper/browsers/BrowserManager")
require("dotenv").config()
const { createLogger,close } = require('winston')
const { getEnv } =require('../helper/env/env')
const { options }   = require('../helper/utility/Logger')
const fs = require('fs-extra')
const { timeLog, error } = require("console")
const { title } = require("process")
//const { }

let browser = Browser
let context = Context
//setDefaultTimeout(60*1000*2)

BeforeAll(async function(){
    console.log("in hooks");
    getEnv()

// browser = await firefox.launch({headless: !false})
   // browser = await invokeBrowser()

})
Before(async function ( { pickle }) {
    fixtures.logger = createLogger(options(pickle.name))
    if(browser==undefined){
       console.log("brow hoo:" + browser);
        browser = await invokeBrowser({pickle})
    }    
    context = await browser.newContext(
       { recordVideo: {
            dir: "test-results/videos",
        }
 
    })
    await context.tracing.start({
        name:fixtures.topic,
        title:fixtures.topic,
        sources:true,
        screenshot:true,
        snapshots:true
    })
    this.page = await context.newPage()
    fixtures.page = this.page
    fixtures.loginPage = new LoginPage()
    //console.log("pick: "+pickle.name);
    //console.log("optons: "+ options);
    fixtures.logger.info(`Environment: ${process.env.NODE_ENV}`)
    fixtures.logger.info(`Brower: ${process.env.BROWSER}`)
    fixtures.logger.info(`Scenario Name: ${pickle.name}`)

    fixtures.loginPage.launchUrl()

        await expect(fixtures.page).toHaveTitle('Numpy Ninja').catch((error)=>{
             fixtures.logger.error(`Error while LaunchUrl Title Assertion: ${error}`)
             throw error
        }).then(()=>fixtures.logger.info('Launched url and Assertion for the title is successful'))
    
        await expect(fixtures.page).toHaveURL('https://dsportalapp.herokuapp.com/')
        fixtures.logger.debug(`User navigating the application for endtoend test automation`)
        fixtures.logger.info(`User navigating the application for endtoend test automation`)
        fixtures.logger.error(`User navigating the application for endtoend test automation`)

       // fixtures.logger.log("User navigating the application for endtoend test automation")

        //await fixtures.page.waitForTimeout(1000)
        await fixtures.loginPage.login('NinjaAlgo','@Algo123')
        await expect(fixtures.page.getByRole('link',{name: 'NinjaAlgo'})).toBeVisible()
        await expect(fixtures.page.getByRole('link',{name:'Sign out'})).toBeVisible()
        await expect(fixtures.page.getByText('You are logged in')).toBeVisible()
        console.log("User Signed In.....");
        
})
After(async function({pickle, result}) {
//screenshot
    let img = Buffer
    let videoPath = String 
    let screenshotPath = `./test-results/screenshots/${fixtures.topic}.png`
    let tracePath = `./test-results/trace/${fixtures.topic}.zip`
    if(result?.status == Status.FAILED){
         //img = await fixtures.page.screenshot({path:"./test-results/screenshots/"+ fixtures.topic+".png"})
         img = await fixtures.page.screenshot({path: screenshotPath})
        //this.attach(img, "image/png")
    }
    console.log("<--End of Scenario: "+pickle.name+ " is "+ result?.status +" -->")
    await context.tracing.stop({path: tracePath})
    await fixtures.page.close()
    await context.close()

    videoPath = await fixtures.page.video().path()
    if(result?.status == Status.FAILED){
        await this.attach(img, "image/png")
        fs.rename(videoPath, "test-results/videos/"+fixtures.topic+".webm",(
            async() => await console.log('Videofile is renamed')))
        await this.attach(
            fs.readFileSync(videoPath),'video/webm')
        const traceFileLink = `<a href="https://trace.playwright.dev/?trace=blob&traceFileName=${encodeURIComponent(tracePath)}">Open</a>`
        //const traceFileLink = `<a href=""https://trace.playwright.dev/">Open ${tracePath}</a>`
        await this.attach(`Trace file: ${traceFileLink}`,'text/html')
    }
    else {
        fs.unlinkSync(videoPath)
    }
    //const traceFileLink = `<a href="https://trace.playwright.dev/?trace=blob&traceFileName=${encodeURIComponent(tracePath)}">Open</a>`
      //  await this.attach(`Trace file: ${traceFileLink}`,'text/html')
})

AfterAll(async function(){
     console.log("context and page need to be cloesed.....");
     //fixtures.logger.close()
    // await fixtures.page.getByRole('link',{name:"Sign out",timeout:10000}).click()
    // console.log("User successfully Signed Out....");
    // expect(await fixtures.page.getByText("Logged out successfully",{timeout: 4000})).toBeVisible()
   //await fixtures.page.close()
     //await context.close()
})