<template>
  
    <div id="page-wrapper">

			<!-- Header -->
				<section id="header">
					<div class="pt-5">

						<!-- Logo -->
							<h1><a href="titulo">MENÉAME</a></h1><br />
							

					</div>
        </section>
        

      <!-- Main -->
      <section id="main">

        <div class="container">

          <div class="mb-5">
            <form>
              <div class="row form-group">
              <div class="col-1">
                <label for="exampleFormControlSelect1">Category: </label>
              </div>
              <div class="col-3">
                <select  v-model="selectedCategory" class="form-control" id="exampleFormControlSelect1">
                <option value="">All Categories</option>
                <option
                      v-for="(item,index) in categories"
                      :value="item"
                      :key="index"
                    >
                      {{ item }}
                </option>
              </select>
              </div>
            </div>
          </form>
          </div>

          <div class="row row-cols-1 row-cols-md-3">

            <!-- Single Article -->
            <div class="col mb-4" v-for="article in articlesFiltered" :key="article._id">
              <div class="card h-100">
                <img :src="`${article.image}`" class="card-img-top" alt="...">
                <div class="card-body">
                  <span class="badge badge-secondary mr-1"> {{ article.author }} </span>
                  <span class="date"> {{ transformDate(article) }} </span>
                  <router-link class="nav-link" :to="{ name:'articlepage', params: {id: article._id }}"><h5 class="card-title pt-1"> {{ article.title }}</h5></router-link>
                  <!-- <h5 class="card-title pt-1"> {{ article.title }} </h5> -->
                  <span class="badge badge-info mb-3 mt-3"> {{ article.categories }} </span>
                  <p class="card-text"> {{ article.excerpt }} </p>

                  <div class="row">
                    <div class="col-6 col-12-small">
                      <ul class="actions">
                        <li><a href="#" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">4 Coments</a></li>
                      </ul>
                    </div>
                    
                    <div class="col-6 col-12-small text-center">
                      <ul class="actions">
                        <li><a href="#" class="btn btn-secondary">+</a></li>
                        <li>0</li>
                        <li><a href="#" class="btn btn-secondary">-</a></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

  </div>
   
</template>


<script>
import axios from 'axios'

export default {
  name: "HomePage",
  data() {
    return {
      selectedCategory: "",
      categories: [ "sport", "cinema & tv", "music", "technology", "politics" ],
      articles: [],
      isAuth: false,
    }
  },
  created() {
    this.$http.get("/articles").then((articles) => {
      this.articles =  articles.data
    })
    // const token = window.localStorage.getItem("token")
    // if(token){
    //   this.isAuth = true
    // }
  },
  computed: {
    articlesFiltered() {
      if(this.selectedCategory==="") return this.articles

      return this.articles.filter(
        (item) => item.categories === this.selectedCategory
      )

    }
  },
  methods:{
   transformDate(article) {
      let transform = new Date(article.published_at)
      let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return new Intl.DateTimeFormat('en-US', shortTime).format(transform)
    }
  }
}
</script>






  