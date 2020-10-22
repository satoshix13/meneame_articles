<template>
  
  <div class="login-container container d-flex align-items-center justify-content-center mt-5">

    <form class="card bg-light p-5" @submit.prevent="register">

        <div class="text-center">
          <h3 class="mb-5 font-weight-light">Formulario de registro</h3>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Nombre de usuario</label>
          <input v-model="user.name" type="text" class="form-control" placeholder="usuario" required>
        </div>
        
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input v-model="user.email" type="email" class="form-control" placeholder="email" required>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Contraseña</label>
          <input v-model="user.password" type="password" class="form-control" placeholder="contraseña" required>
        </div>


        <br>



        <div class="row text-center">
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button type="submit" class="btn btn-info mx-auto mt-5">Register</button></li>
          </ul>
        </div>
        
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button  class="btn btn-secondary mx-auto mt-5" @click="toLogin">Login</button></li>
          </ul>
        </div>
      </div>

    </form>

  </div>
</template>


<script>
export default {
  name: "RegistrationPage",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password:""
      }
    }
  },
  methods:{
   async register(){
      try {
        await this.$http.post("/users", this.user) 
        alert("Congrats, you account has just been created. Please login ")
        this.$router.push({name: "login"})
      }catch(err){
        console.log("ups, something went wrong")
      }
    },
    toLogin(){
      this.$router.push({ name: "login"})
    }
  }
}
</script>