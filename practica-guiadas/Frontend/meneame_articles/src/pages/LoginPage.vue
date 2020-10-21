<template>
  <div class="login-container container d-flex align-items-center justify-content-center">

    <form class="card bg-light p-5" @submit.prevent="login">

      <div class="text-center">
        <h3 class="mb-5 font-weight-light">Iniciar Sesión</h3>
      </div>

      <div class="form-group">
        <label  for="Email">Email</label>
        <input v-model="email" type="email" class="form-control" id="Email" placeholder="email">
      </div>

      <div class="form-group">
        <label for="Password">password</label>
        <input v-model="password" type="password" class="form-control" id="Password" placeholder="password">
      </div>
  
       <br>

      <div class="row text-center">
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button type="submit" class="btn btn-info mx-auto mt-5">Login</button></li>
          </ul>
        </div>
        
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button  class="btn btn-secondary mx-auto mt-5" @click="toRegister">Register</button></li>
          </ul>
        </div>

      <!-- <router-link class="btn" :to="{name:'register'}"></router-link> -->
      </div>
    </form>
      
  </div>
</template>


<script>
export default {
  name: "LoginPage",
  data(){
    return {
      email: "",
      password:"",
      isAuth: false,
    }
  },
  methods:{
    toRegister(){
      this.$router.push({name:"register"})
    },
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!=null
    },
    async login(){
      const loginData = {
        email: this.email,
        password: this.password
      }
     try {
        const response = await this.$http.post("auth/login", loginData)
        window.localStorage.setItem("token", response.data.token)
        this.checkAuth()
        this.$router.push({ name: "home"})
      }catch(err){
        alert("Looks like you have made a mistake, please try again or register")
      }
    },
    
  }
}
</script>