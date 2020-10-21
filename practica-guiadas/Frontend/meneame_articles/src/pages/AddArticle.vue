<template>

  <section id="main">
    <div class="container">
      <form @submit.prevent="addArticle">

        <div class="form-group">
          <label for="title">Title Article:</label>
          <input v-model="article.title" type="text" id="title" class="form-control">
        </div>
        <div class="form-group">
          <label for="category">Category:</label>
          <input v-model="article.category" type="text" id="category" class="form-control">
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input v-model="article.image" type="text" id="image" class="form-control">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content Article:</label>
          <textarea v-model="article.body" class="form-control" rows="3"></textarea>
        </div>

      <button type="submit">Add Article</button>
      </form>
    </div>
  </section>
  
</template>

<script>
export default {
  name: "AddArticle",
  data() {
    return {
      article: {
      title: "",
      category: "",
      image: "",
      body: ""
    }
    }
  },
  computed: {
    async getTokenData(){
      // const pass = "superpassword"
      // const token = await window.localStorage.getItem("token")
      // const tokenData = await this.$jwt.verify(token, pass)
      // console.log(token)
     
    }
  },
  methods: {
    addArticle(){
      console.log(this.article)
      this.getTokenData
      // try {
      //       let tokenData = await jwt.verify(req.token, config.APP_SECRET)

      //       let userProfile = tokenData.profile || defaultUserProfile
    }
  }

}
</script>