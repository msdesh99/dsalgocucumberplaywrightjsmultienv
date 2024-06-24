const { expect} = require("@playwright/test")
const { Given, When, Then } = require("@cucumber/cucumber")
const pythoncode = require("../../../../testdata/pythoncode.json");
const { fixtures } = require("../../hooks/Fixtures");

let jsonFileRecord =0
let alertMessage=''
Given('User is on array practice page for {string}', async function (scenarioType) {
     await fixtures.page.goto('https://dsportalapp.herokuapp.com/array/practice')
     await expect(fixtures.page).toHaveURL(/practice/)
     await (fixtures.page).getByRole('link',{name:'Search the array', has:{href:'/question/1'}}).click()
     fixtures.topic = scenarioType
     if(scenarioType=='pythoncode-negative')
          jsonFileRecord = 0
     else if(scenarioType=='pythoncode-positive-found')
          jsonFileRecord = 1;

     else if(scenarioType == 'pythoncode-positive-not-found')
          jsonFileRecord=2;

     //console.log(pythoncode.code);
});

When('user Sends an unintended python code in the python editor', async function () {

     const pythonEle = fixtures.page.locator("//form[@id='answer_form']/div/div/div/textarea")
     await pythonEle.press("End")
     await fixtures.page.locator("//form[@id='answer_form']/div/div/div/textarea").fill(pythoncode[jsonFileRecord].code)
     await fixtures.page.locator("//*[@type='button']").click() 
     if(this.pythonscenario=='Negative'){
          fixtures.page.on('dialog',dialog=>{
               expect(dialog.type()).toEqual('alert')
               expect(dialog.message()).toEqual('SyntaxError: bad input on line 2')
               alertMessage = dialog.message()
               dialog.accept()
          })
     }
});
Then('user should see the alert message popping up in the window', async function () {
    if(jsonFileRecord!=0) {
      expect(await fixtures.page.locator("//div[@class='container']//pre[@id='output']").textContent()).toContain ('found')
      console.log("Output:" + await fixtures.page.locator("//div[@class='container']//pre[@id='output']").textContent());
    }     
    else console.log(`Output: User got an alert with message: ${alertMessage}` );

});

