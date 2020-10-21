<template>

  <section id="main">
    <div class="container">
      <form @submit.prevent="addArticle">

        <div class="form-group">
          <label for="title">Title Article:</label>
          <input v-model="article.title" type="text" id="title" class="form-control">
        </div>

        <div class="form-group">
          <label for="image">Image:</label>
          <input v-model="article.image" type="text" id="image" class="form-control">
        </div>

        <!-- <div class="form-group">
          <label for="category">Category:</label>
          <input v-model="article.categories" type="text" id="category" class="form-control">
        </div> -->

        <div class="form-group">
          <label for="category">Category: </label> 
          <select v-model="article.categories" class="form-control" id="category">
            <option
              v-for="(item,index) in categories"
              :value="item"
              :key="index"
              >
                {{ item }}
            </option>
          </select>
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
      categories: [ "sport", "cinema & tv", "music", "technology", "politics" ],
      article: {
        title: "",
        categories: "",
        image: "",
        body: "",
        author: "Antonio"
      }
    }
  },
  computed: {
    async getTokenData(){
      // const pass = "superpassword"
      // const token = await window.localStorage.getItem("token")
      // const tokenData = await this.$jwt.verify(token, pass)
      // console.log(token)
      // console.log(this.article)
      // this.getTokenData
      // try {
      //       let tokenData = await jwt.verify(req.token, config.APP_SECRET)

      //       let userProfile = tokenData.profile || defaultUserProfile
     
    }
  },
  methods: {
   async addArticle(){
     const token = window.localStorage.getItem("token")
     if(!token){
       alert("You have to be logged in to send article")
       this.$router.push({ name: "login"})
       return
     }
      try {
        await this.$http.post("/articles", this.article)
        this.$router.push({ name: "home"})
      } catch (err) {
        alert("sorry, try please try again later")
        console.log(err)
      }
    }
  }

}
</script>