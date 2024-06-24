const{ Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber")
const{ expect } = require("@playwright/test")
const{ LinkedListPage } = require("../../pages/LinkedListPage");
const { fixtures } = require("../../hooks/Fixtures");

 let linkedListPage = LinkedListPage
 setDefaultTimeout(60*1000*2)

Given('User is on linkedlist module page', async function () {
    console.log("User is on Linked List module page");
    this.linkedListPage = new LinkedListPage()
    fixtures.linkedListPage = this.linkedListPage
     await expect(fixtures.page).toHaveURL(/linked-list/)
     await expect(fixtures.page.getByRole('heading',{name:'Linked List'})).toBeVisible()
     await expect(fixtures.page.getByText('Topics Covered')).toBeVisible()
});

When('User clicks {string} link', async function (topic) {
       fixtures.topic = topic
       console.log(`User clicked ${topic}.....`);
       await fixtures.linkedListPage.introductionTopic(topic)
  });

Then('User should land on the {string} page', async function (url) {
    console.log(`User is on ${url} page......`);
    await expect(fixtures.page).toHaveURL(new RegExp(`${url}`,"i"))
});
When('User Clicks Sign Out Link', async function () {
    console.log("User Signing Out.....");
    await fixtures.page.getByRole('link',{name:"Sign out"}).click()
});
Then('User Should Successfully Log Out from the application', async function () {
    console.log("User successfully Signed Out....");
    await expect(await fixtures.page.getByText("Logged out successfully")).toBeVisible()
});
Then('Close the browser', async function () {
    console.log("Closing the Browser....");
    console.log("============================\n");
    //console.log("End Of Linked Link module Automation");
   // await browser.close()
    //await fixtures.page.close()
});
