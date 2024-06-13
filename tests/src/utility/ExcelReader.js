const XLSX = require('xlsx')
const { pageFixture } = require('../hooks/PageFixture')


exports.ExcelReader = class ExcelReader {
    constructor() {}
    readData() {
        const workbook = XLSX.readFile('testdata/loginDataExcel.xlsx')
        const sheetNameList = workbook.SheetNames
        const loginDataArr = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]])
        //console.log("in excread: "+ loginDataArr[0].username);
        pageFixture.loginDataArr = loginDataArr
        //return loginDataArr
    }
}