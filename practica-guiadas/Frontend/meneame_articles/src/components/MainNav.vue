<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name:'home'}">Menéame</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'addarticle'}">Add Article</router-link>
        </li>
        <li v-if="!isAuth" class="nav-item">
         <router-link class="nav-link" :to="{ name:'login'}">Login</router-link>
        </li>
         <li v-else class="nav-item">
          <button class="nav-link" @click="logout">logout</button>
        </li>

         <!-- <li class="nav-item">
         <router-link class="nav-link" :to="{ name:'register'}">Register</router-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  
  computed: {
    isAuth(){
     return this.$store.state.isAuth
    }
  },
  created() {
    const token = window.localStorage.getItem("token")
    if(token){
      this.$store.commit("login")
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout")
      window.localStorage.removeItem("token")
      // this.isAuth = false
    }
  }
};
</script>
