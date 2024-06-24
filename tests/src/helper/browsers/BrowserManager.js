const { chromium, firefox,webkit, LaunchOptions  }  = require('@playwright/test')
const { error } = require('console')
const { fixtures } = require('../../hooks/Fixtures')
const { pickle } = require('@cucumber/cucumber')
//const { global } = require('../types/env.d')

const options = LaunchOption = { 
                    headless: true,
                    slowMo: 0
                   /* args:[ 
                        '--start-maximized',
                        'disable-dev-shm-usage',
                        '--no-sandbox'
                    ],
                    video: "true"*/ 
                }    
exports.invokeBrowser = () => {
      const browserType = process.env.BROWSER
      //const browserType = 'chrome'
     // console.log("brw: "+ pickle.name);
   if(browserType == 'chrome'){
        return chromium.launch(options)
        console.log("browtype: "+ browserType);
        fixtures.logger.info("browtype: "+ browserType)
   }
   else if(browserType == 'firefox')
       return firefox.launch(options)

   else if(browserType == 'webkit')
        return webkit.launch(options)
   else{
        fixtures.logger.error('Please select proper browser')
        throw new Error('Please select proper browser') 
   }     

}


