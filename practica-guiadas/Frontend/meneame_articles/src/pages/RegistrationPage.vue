<template>
  
  <div class="login-container container d-flex align-items-center justify-content-center">

    <form class="card p-5">

        <div class="text-center">
          <h3 class="mb-5 font-weight-light">Formulario de registro</h3>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Nombre de usuario</label>
          <input type="email" class="form-control" placeholder="usuario" required>
        </div>
        
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" placeholder="email" required>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Contraseña</label>
          <input type="password" class="form-control" placeholder="contraseña" required>
        </div>

        <button type="submit" class="btn mx-auto mt-5"><a href="#">Registro</a></button>

    </form>

  </div>
</template>


<script>
export default {
  name: "RegistrationPage"
}
</script>