const { fixtures  } = require("../hooks/Fixtures")

exports.LinkedListPage = class LinkedListPage{

  constructor(){
        this.introductionAnchor
   }
  
   async introductionTopic(topic) {
      this.introductionAnchor = await fixtures.page.getByRole('link',{name: topic})
      await this.introductionAnchor.click()
   }

}