<template>
  <div id="page-wrapper">

			<!-- Header -->
				<section id="header">
					<div class="pt-5">

						<!-- Logo -->
							<h1><a href="index.html">MENÉAME</a></h1>
							<p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>

					</div>
				</section>

	<!-- Main -->
	<section id="main">

				<div class="row d-flex align-items-center justify-content-center">

					<!-- Content -->
					<div id="content" class="col-8 col-12-medium">

						<!-- Post -->
						<div class="box post">
							<header>
									<span class="badge badge-secondary mr-1">{{ article.author }}</span>
									<span class="date">{{ article.published_at }}</span>

							</header>

							<a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>

							<h3>{{ article.title }}</h3>

							<p>{{ article.body }}</p>
					
							<div class="row">
								<div class="col-6 col-12-small">
									<ul class="actions">
										<li><button type="button" class="button" data-toggle="modal" data-target="#exampleModal">Comentar</button></li>
									</ul>
								</div>
								
								<div class="col-6 col-12-small">
									<ul class="actions">
										<li><a href="#" class="button">+</a></li>
										<li>0</li>
										<li><a href="#" class="button">-</a></li>
									</ul>
								</div>
							</div>

							</div>

						</div>

					</div>

					<!-- Coments -->
					<div class="row d-flex align-items-center justify-content-center mt-2">

						<div id="content" class="col-8 col-12-medium">
							<span class="badge badge-secondary mr-1">usuario</span>
							<span class="date">July 31</span>
							<p>Comentario 1</p>
						</div>

						<div id="content" class="col-8 col-12-medium">
							<span class="badge badge-secondary mr-1">Usuario</span>
							<span class="date">July 31</span>
							<p>Comentario 2</p>
						</div>

						<div id="content" class="col-8 col-12-medium">
							<span class="badge badge-secondary mr-1">Usuario</span>
							<span class="date">July 31</span>
							<p>Comentario 3</p>
						</div>

					</div>

	</section>	
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><span class="badge badge-secondary">usuario</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comentario:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success">Comentar</button>
              </div>

            </div>
          </div>
        </div>

	</div>
</template>



<script>
export default {
	name: "ArticlePage",
	data () {
		return {
			article: {},
		}
	},
	created() {
		this.getArticle
		// const id = this.$route.params.id
		// console.info(this.getData)
		// async function getData(){ 
		// try{
		// 	let article = await this.$http.get("/articles/"+id)
		// 	console.info(article)
		// }catch(err){
		// 	console.info(err)
		// }
		// }
	},
	computed: {
	  async getArticle() {
			const id = this.$route.params.id
			try{
			let article = await this.$http.get("/articles/"+id)
			this.article =  article.data
		}catch(err){
			console.info(err)
		}
		}
	}
}
</script>