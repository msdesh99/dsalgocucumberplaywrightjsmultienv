const { parse} = require('csv-parse/sync')
const path = require('path')
const { fixtures } = require('../../hooks/Fixtures')
const  fs  = require ('fs')  
 
exports.CSVReader = class CSVReader {
    constructor(){}

    readData(){
         const csvFilePath = path.join('testdata/loginDataCSV.csv')
         const csvData = fs.readFileSync(csvFilePath,'utf8')
         const loginDataArr = parse(csvData,{from_line : 1})
       
         fixtures.loginDataArr = loginDataArr
    }
}