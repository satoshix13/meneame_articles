<template>

  <section id="main">
    <div class="container">
      <form>

        <div class="form-group">
          <label for="exampleInputEmail1">Title Article:</label>
          <input type="email" class="form-control">
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content Article:</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>

      </form>
    </div>
  </section>
  
</template>

<script>
export default {
  name: "AddArticle"
}
</script>