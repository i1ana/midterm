//Factory 


<!-- GAME -->

		<div class= "col-md-4">
				<h2 ng-repeat="game in boardGames"> {{game.name}}</h2>
     	 		<p><img class="thumbnail" src="twilightStruggle.jpg"</p>

            <!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  View more Info &raquo; </button>

<!-- Modal -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="myModalLabel">{{boardGames.name}}</h4>
				      </div>
				      <div class="modal-body">
				       		<div>{{boardGames}}</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Add to Cart</button>
				      </div>
				    </div>
				  </div>
				</div>

		</div>

<!-- GAME -->

		<div class= "col-md-4">
				<h2 ng-repeat="game in boardGames"> {{game.name}}</h2>
     	 		<p><img class="thumbnail" src="monopoly.jpg"</p>

            <!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  View more Info &raquo; </button>

<!-- Modal -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="myModalLabel">{{boardGames.name}}</h4>
				      </div>
				      <div class="modal-body">
				       		<div>{{boardGames}}</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Add to Cart</button>
				      </div>
				    </div>
				  </div>
				</div>

		</div>


	</div>
</div>

<p> </p>

<!-- SECOND ROW -->

<div class= "container">

	<div class="row">

	<div class= "col-md-4">
				<h2 ng-repeat="game in boardGames"> {{game.name}}</h2>
     	 		<p><img class="thumbnail" src="cah.jpg"></img>
     	 		 </p>
                     <!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  View more Info &raquo; </button>

<!-- Modal -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="myModalLabel">{{boardGames.name[i]}}</h4>
				      </div>
				      <div class="modal-body">
				       		<div>{{boardGames[i]}}</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Add to Cart</button>
				      </div>
				    </div>
				  </div>
				</div>
	</div>

<!-- GAME -->

		<div class= "col-md-4">
				<h2 ng-repeat="game in boardGames"> {{game.name}}</h2>
     	 		<p><img class="thumbnail" src="catan.jpg"></img>
     	 		</p>
                    <!-- Button trigger modal -->
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
			  View more Info &raquo; </button>

<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">hello</h4>
		      </div>
		      <div class="modal-body">
		       		<div>{{boardGames}}</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary">Add to Cart</button>
		      </div>
		    </div>
		  </div>
		</div>
		</div>

<!-- GAME -->

	<div class= "col-md-4">		
			<h2 ng-repeat="game in boardGames"> {{game.name}}</h2>
     	 		<p><img class="thumbnail" src="codename.jpg"></p>
                <!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
				  View more Info &raquo; </button>

<!-- Modal -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" ng-repeat = "game in boardGames">{{game.name}}</h4>
				      </div>
				      <div class="modal-body">
				       		<div>{{boardGames}}</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Add to Cart</button>
				      </div>
				    </div>
				  </div>
				</div>



		</div>
	</div>
</div>

// BODY 

<!-- <div>
<!-- Featured Content -->
<h1> Check out these catagories of games! </h1>
<div class="container">
	<div class="row">
		<div class="col-lg-6 yellow">
			Pie gummies fruitcake bear claw jelly beans. Marzipan gummi bears candy donut marshmallow toffee cake carrot cake tiramisu. Jelly beans biscuit carrot cake muffin sweet toffee chupa chups tootsie roll.
			Croissant powder gingerbread chocolate cake tiramisu donut croissant donut jelly. Marzipan donut toffee lollipop pie cake. Lemon drops halvah powder gummies jelly beans. Oat cake jelly beans tart apple pie dessert.
			Cotton candy chocolate cake ice cream lemon drops cotton candy powder tootsie roll. Donut dessert lollipop croissant sweet dragée. Biscuit sesame snaps jelly beans chocolate jelly caramels carrot cake. Soufflé bear claw muffin cupcake powder wafer.
			Pudding fruitcake halvah lemon drops. Apple pie chocolate cake chocolate bar chocolate bar topping bear claw pastry lemon drops. Cupcake croissant toffee brownie soufflé danish candy canes donut wafer.
			Bear claw cookie cake. Bear claw marzipan candy canes dragée bonbon danish powder. Gummi bears lollipop caramels tiramisu cupcake gingerbread macaroon cupcake chupa chups.
	</div>

		<div class="col-lg-6 red">  
			<div class="row">
				<div class="col-lg-6 yellow"> Bear claw cookie cake. Bear claw marzipan candy canes dragée bonbon danish powder. Gummi bears lollipop caramels tiramisu cupcake gingerbread macaroon cupcake chupa chups.</div>
				<div class="col-lg-6 red">Bear claw cookie cake. Bear claw marzipan candy canes dragée bonbon danish powder. Gummi bears lollipop caramels tiramisu cupcake gingerbread macaroon cupcake chupa chups. </div>
			</div>
			<div class="row">
				<div class="col-lg-6 red"> Bear claw cookie cake. Bear claw marzipan candy canes dragée bonbon danish powder. Gummi bears lollipop caramels tiramisu cupcake gingerbread macaroon cupcake chupa chups. </div>
				<div class="col-lg-6 yellow"> HERES A TYPE OF BOARD GAME OMG YOU LUV BOARD GAMES PLAY ME </div>
			</div>
		</div>
	</div>
</div> -->




