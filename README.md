# Automation Framework using Playwright Javascript + Cucumber (BDD)
Playwright is a popular JavaScript library for automating web applications.Playwright supports multiple browsers and offers fast, reliable, 
and capable automation for web components by using the modern browser API.
Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to 
collaborate on defining and testing application requirements in a human-readable format. T
Where are JavaScript tools used?
In automation of web applications, emulations of user actions in the browser is needed. Javascript unables user to automatically test the application login form and other more complex cases. 
In automation of services, JavaScript tools start automating services quickly. 
In automation of desktop application, JavaScript has tools to test the visual part and the application itself. 
In automation of mobile applications, JavaScript tools support both Android and iOS applications automation. 

By combining these two tools, we can create more reliable and maintainable tests.

## Features
- **Awesome report with screenshots, videos & logs**
- **Execute tests on multiple environments**
- **Parallel execution**
- **ScreenShot and Video recording for failed features**
- **Trace viewer is available for every feature**
- **Rerun only failed features**
- **Retry failed tests on CI**
- **Github Actions integrated with downloadable report**
- **Page object model**

## Sample Winston Log File
![image](https://github.com/msdesh99/dsalgocucumberplaywrightjsmultienv/assets/131903278/8bd183e7-f6f5-4b61-b740-a8f80f17462f)

## Project Structure
- **.github -> yml file to execute the tests in GitHub Actions**
- **src -> Contains all the features & Typescript code**
- **test-results -> Contains all the reports related file**
  
## Usage
1. **Clone the Repository**: `git clone https://github.com/msdesh99/dsalgocucumberplaywrightjsmultienv.git`
2. **Set Up Environment**: Ensure JDK, Maven are configured.
3. **Run Tests Locally**: Execute tests on terminal in the project directory folder using ` npm run testchrome --JSONFILE='chrome'`.
   
## View Reports
- **Mutilple Cucumber Report**
- **Default Cucumber report**
- **Logs**
- **Screenshots of failure**
- **Test videos of failure**
- **Trace of failure**
  
## Folder Structure
- **src\pages -> All the page (UI screen)**
- **src\test\features -> write your features here**
- **src\test\features\steps -> Your step definitions goes here**
- **src\hooks\Hooks.js -> Browser setup and teardown logic**
- **src\hooks\Fixture.js -> Simple way to share the page objects to steps**
- **src\helper\env\env.js -> Multiple environments are handled**
- **src\helper\browsers\BrowserManager.js -> Selects the Browser type**
- **src\helper\utility\report -> To generate the report**
- **config/cucumber.js -> One file to do all the magic**
- **package.json -> Contains all the dependencies**
- **src\helper\util -> Read test data from json, Excel,csv & logger**
