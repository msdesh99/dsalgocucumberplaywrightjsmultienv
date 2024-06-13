const { pageFixture  } = require("../hooks/PageFixture")

exports.LinkedListPage = class LinkedListPage{

  constructor(){
        this.introductionAnchor
   }
  
   async introductionTopic(topic) {
      this.introductionAnchor = await pageFixture.page.getByRole('link',{name: topic})
      await this.introductionAnchor.click()
   }

}