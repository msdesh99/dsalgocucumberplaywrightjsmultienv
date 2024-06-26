module.exports = {
    endtoend:  {
        tags: "@endtoend or @pythoncode",
        formatOptions:{
            snippetInterface: "async-await"
        },
        paths: ["tests/src/features/*.feature"],
        dryRun: false,
        require: ["tests/src/features/steps/*.js",              
                     "tests/src/hooks/Hooks.js",
                     "tests/src/hooks/PageFixture.js"
                    ], 
        format: [
                `html:test-results/cucumber-report-endtoend-${process.env.npm_config_JSONFILE}.html`,
                `json:test-results/cucumber-report-endtoend-${process.env.npm_config_JSONFILE}.json`,
                "rerun:@rerunendtoend.txt"
        ],
        parallel: 3,
        retry: 1
      
    },
    rerunendtoend:  {
        formatOptions:{
            snippetInterface: "async-await"
        },
        dryRun: false,
        require: ["tests/src/features/steps/*.js","tests/src/hooks/Hooks.js"], 
        format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunendtoend.txt"
        ],
        parallel: 3
    },
    ddloginexcel:  {
        formatOptions:{
            snippetInterface: "async-await"
        },
        paths: ["tests/src/features/ddlogin.feature"],
        dryRun: false,
        require: ["tests/src/features/steps/DDLoginExcelSteps.js",
                     "tests/src/hooks/HooksDDLogin.js",
                     "tests/src/hooks/PageFixture.js" ,
                     "tests/src/utility/ExcelReader.js"  ], 
        format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunddloginexcel.txt"
        ],
        parallel: 3,
        retry: 1
    },
    rerunddloginexcel:  {
        formatOptions:{
            snippetInterface: "async-await"
        },
        dryRun: false,
        require: ["tests/src/features/steps/DDLoginExcelSteps.js",
                      "tests/src/hooks/HooksDDLogin.js",
                      "tests/src/hooks/PageFixture.js",
                      "tests/src/utility/ExcelReader.js"], 
        format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunddloginexcel.txt"
        ],
        parallel: 1
    },
    ddlogincsv: {
           formatOptions: {
               snippetInterface: "async-await"
           },
           paths: ["tests/src/features/ddlogin.feature"],
           dryRun: false,
           require: [
                "tests/src/features/steps/DDLoginCSVSteps.js",
                "tests/src/hooks/PageFixture.js",
                "tests/src/hooks/HooksDDLogin.js",
                "tests/src/utility/CSVReader.js"
           ],
           format: [
            "progress-bar",
            "html:test-results/cucumber-report-ddlogincsv.html",
            "json:test-results/cucumber-report-ddlogincsv.json",
            "rerun:@rerunddlogincsv.txt"
           ],
           parallel: 3,
           retry: 1
    },
    rerunddlogincsv: {
              formatOptions: {
                snippetInterface: "async-await"
              },
              dryRun: false,
              require: [
                "tests/src/features/steps/DDLoginCSVSteps.js",
                "tests/src/hooks/HooksDDLogin.js",
                "tests/src/hooks/PageFixture.js",
                "tests/src/utility/CSVReader.js"

              ],
              format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunddlogincsv.txt"
              ]
    },
    ddloginjson:  {
        formatOptions:{
            snippetInterface: "async-await"
        },
        paths: ["tests/src/features/ddlogin.feature"],
        dryRun: false,
        require: ["tests/src/features/steps/DDLoginJsonSteps.js",
                     "tests/src/hooks/HooksDDLogin.js",
                     "tests/src/hooks/PageFixture.js"   ], 
        format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunddloginjson.txt"
        ],
        parallel: 3,
        retry: 1
    },
    rerunddloginjson:  {
        formatOptions:{
            snippetInterface: "async-await"
        },
        dryRun: false,
        require: ["tests/src/features/steps/DDLoginJsonSteps.js",
                      "tests/src/hooks/HooksDDLogin.js",
                      "tests/src/hooks/PageFixture.js"], 
        format: [
                "progress-bar",
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerunddloginjson.txt"
        ],
        parallel: 1
    }


}