const{ Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber")
const{ expect } = require("@playwright/test")
const{ LinkedListPage } = require("../../pages/LinkedListPage");
const { pageFixture } = require("../../hooks/PageFixture");

 let linkedListPage = LinkedListPage
 setDefaultTimeout(60*1000*2)

Given('User is on linkedlist module page', async function () {
    console.log("User is on Linked List module page");
    this.linkedListPage = new LinkedListPage()
    pageFixture.linkedListPage = this.linkedListPage
     await expect(pageFixture.page).toHaveURL(/linked-list/)
     await expect(pageFixture.page.getByRole('heading',{name:'Linked List'})).toBeVisible()
     await expect(pageFixture.page.getByText('Topics Covered')).toBeVisible()
});

When('User clicks {string} link', async function (topic) {
       pageFixture.topic = topic
       console.log(`User clicked ${topic}.....`);
       await pageFixture.linkedListPage.introductionTopic(topic)
  });

Then('User should land on the {string} page', async function (url) {
    console.log(`User is on ${url} page......`);
    await expect(pageFixture.page).toHaveURL(new RegExp(`${url}`,"i"))
});
When('User Clicks Sign Out Link', async function () {
    console.log("User Signing Out.....");
    await pageFixture.page.getByRole('link',{name:"Sign out"}).click()
});
Then('User Should Successfully Log Out from the application', async function () {
    console.log("User successfully Signed Out....");
    await expect(await pageFixture.page.getByText("Logged out successfully")).toBeVisible()
});
Then('Close the browser', async function () {
    console.log("Closing the Browser....");
    console.log("============================\n");
    //console.log("End Of Linked Link module Automation");
   // await browser.close()
    //await pageFixture.page.close()
});
