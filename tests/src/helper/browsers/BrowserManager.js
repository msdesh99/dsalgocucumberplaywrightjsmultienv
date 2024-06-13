const { chromium, firefox,webkit, LaunchOptions  }  = require('@playwright/test')
const { error } = require('console')
//const { global } = require('../types/env.d')

const options = LaunchOption = { 
                    headless: true,
                    slowMo: 1000
                   /* args:[ 
                        '--start-maximized',
                        'disable-dev-shm-usage',
                        '--no-sandbox'
                    ],
                    video: "true"*/
                }    
exports.invokeBrowser = () => {
      //const browserType = process.env.Browser
      const browserType = 'chrome'
   if(browserType == 'chrome'){
        return chromium.launch(options)
        console.log("browtype: "+ browserType);
   }
   else if(browserType == 'firefox')
       return firefox.launch(options)

   else if(browserType == 'webkit')
        return webkit.launch(options)
   else
        throw new Error('Please select proper browser') 
}


