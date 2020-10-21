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
									<span class="badge badge-secondary mr-1">Usuario</span>
									<span class="date">July 31</span>
									<h3><a href="#">Just another post</a></h3>
								
								<h2><a href="#">By the way, many thanks to <strong>regularjane</strong>
								for these awesome demo photos</a></h2>
							</header>

							<a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>

							<h3>You should probably check out her work</h3>

							<p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
							ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
							sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
							in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
							consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
							in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
							magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
							consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
							justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
							mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
							Curabitur leo nibh, rutrum malesuada.
					
							<br><br>

							Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
							ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
							sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
							in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
							consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
							in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
							magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
							consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
							justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
							mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
							Curabitur leo nibh, rutrum malesuada.</p>
					
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
							<span class="badge badge-secondary mr-1">Usuario</span>
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

			<!-- Footer -->
				<section id="footer">
					<div id="copyright" class="container">
						<ul class="links">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
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
  name: "ArticlePage"
}
</script>