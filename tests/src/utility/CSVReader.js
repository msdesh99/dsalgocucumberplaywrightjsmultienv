const { parse} = require('csv-parse/sync')
const path = require('path')
const { pageFixture } = require('../hooks/PageFixture')
const  fs  = require ('fs')  
 
exports.CSVReader = class CSVReader {
    constructor(){}

    readData(){
         const csvFilePath = path.join('testdata/loginDataCSV.csv')
         const csvData = fs.readFileSync(csvFilePath,'utf8')
         const loginDataArr = parse(csvData,{from_line : 1})
       
         pageFixture.loginDataArr = loginDataArr
    }
}