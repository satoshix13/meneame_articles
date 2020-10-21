<template>
  <div class="login-container container d-flex align-items-center justify-content-center">

    <form class="card bg-light p-5">

      <div class="text-center">
        <h3 class="mb-5 font-weight-light">Iniciar Sesión</h3>
      </div>

      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="email">
      </div>
  
      <div class="form-group">
        <label for="Password">Contraseña</label>
        <input type="password" class="form-control" id="Password" placeholder="contraseña">
      </div>

      <div class="row text-center">
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button type="submit" class="btn btn-info mx-auto mt-5">Login</button></li>
          </ul>
        </div>
        
        <div class="col-6 col-12-small">
          <ul class="actions">
            <li><button type="submit" class="btn btn-secondary mx-auto mt-5">Register</button></li>
          </ul>
        </div>
      </div>

    </form>

  </div>
</template>


<script>
export default {
  name: "LoginPage"
}
</script>