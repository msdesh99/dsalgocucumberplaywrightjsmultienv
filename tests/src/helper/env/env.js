const dotenv = require('dotenv')

const filePath = process.env.NODE_ENV
exports.getEnv = () => {
    process.env.BASEURL='https://dsportalapp.herokuapp.com'

   if(process.env.NODE_ENV=='prod'){
        dotenv.config({
            override: true,
            path: `.env.${process.env.NODE_ENV}`
        }) 
   }    
    else if(process.env.NODE_ENV=='test-chrome'){
        dotenv.config({
             override:true,
             path: `.env.${ process.env.NODE_ENV}`
        })
    }    
    else if(process.env.NODE_ENV=='test-firefox'){
        dotenv.config({
            override:true,
            path:`.env.${process.env.NODE_ENV}`

        })
    }    
    else if(process.env.NODE_ENV=='test-webkit'){
        dotenv.config({
               override:true,
               path:`.env.${process.env.NODE_ENV}` 
        })
    }

}
    


