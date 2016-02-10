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
