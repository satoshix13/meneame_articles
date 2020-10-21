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
                <select class="form-control" id="exampleFormControlSelect1">
                <option>All Categories</option>
                <option>Cinema</option>
                <option>Sport</option>
                <option>Technology</option>
                <option>Music</option>
              </select>
              </div>
            </div>
          </form>
          </div>

          <div class="row row-cols-1 row-cols-md-3">

            <!-- Single Article -->
            <div class="col mb-4">
              <div class="card h-100">
                <img src="../../public/images/pic01.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <span class="badge badge-secondary mr-1">User</span>
                  <span class="date">July 31</span>
                  <h5 class="card-title pt-1">Card title</h5>
                  <span class="badge badge-info mb-3">category</span>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  <div class="row">
                    <div class="col-6 col-12-small">
                      <ul class="actions">
                        <li><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">4 Coments</button></li>
                      </ul>
                    </div>
                    
                    <div class="col-6 col-12-small">
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

            <!-- Single Article -->
            <div class="col mb-4">
              <div class="card h-100">
                <img src="../../public/images/pic01.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <span class="badge badge-secondary mr-1">User</span>
                  <span class="date">July 31</span>
                  <h5 class="card-title pt-1">Card title</h5>
                  <span class="badge badge-info mb-3">category</span>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  <div class="row">
                    <div class="col-6 col-12-small">
                      <ul class="actions">
                        <li><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">4 Coments</button></li>
                      </ul>
                    </div>
                    
                    <div class="col-6 col-12-small">
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
export default {
  name: "HomePage",
  data() {
    return {
      selectedCategory: "",
      categories: [
        "Sport", "Cinema and TV", "Music", "Technology"
      ],
    }
  }
}
</script>






  