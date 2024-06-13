const { expect} = require("@playwright/test")
const { Given, When, Then } = require("@cucumber/cucumber")
const pythoncode = require("../../../../testdata/pythoncode.json");
const { pageFixture } = require("../../hooks/PageFixture");

let jsonFileRecord =0
let alertMessage=''
Given('User is on array practice page for {string}', async function (scenarioType) {
     await pageFixture.page.goto('https://dsportalapp.herokuapp.com/array/practice')
     await expect(pageFixture.page).toHaveURL(/practice/)
     await (pageFixture.page).getByRole('link',{name:'Search the array', has:{href:'/question/1'}}).click()
     pageFixture.topic = scenarioType
     if(scenarioType=='pythoncode-negative')
          jsonFileRecord = 0
     else if(scenarioType=='pythoncode-positive-found')
          jsonFileRecord = 1;

     else if(scenarioType == 'pythoncode-positive-not-found')
          jsonFileRecord=2;

     //console.log(pythoncode.code);
});

When('user Sends an unintended python code in the python editor', async function () {

     const pythonEle = pageFixture.page.locator("//form[@id='answer_form']/div/div/div/textarea")
     await pythonEle.press("End")
     await pageFixture.page.locator("//form[@id='answer_form']/div/div/div/textarea").fill(pythoncode[jsonFileRecord].code)
     await pageFixture.page.locator("//*[@type='button']").click() 
     if(this.pythonscenario=='Negative'){
          pageFixture.page.on('dialog',dialog=>{
               expect(dialog.type()).toEqual('alert')
               expect(dialog.message()).toEqual('SyntaxError: bad input on line 2')
               alertMessage = dialog.message()
               dialog.accept()
          })
     }
});
Then('user should see the alert message popping up in the window', async function () {
    if(jsonFileRecord!=0) {
      expect(await pageFixture.page.locator("//div[@class='container']//pre[@id='output']").textContent()).toContain ('found')
      console.log("Output:" + await pageFixture.page.locator("//div[@class='container']//pre[@id='output']").textContent());
    }     
    else console.log(`Output: User got an alert with message: ${alertMessage}` );

});

