 
angular.module('main', [])

angular.module('main')
	.controller('mainController', ['$scope', function($scope){

		$scope.boardGames= null;











	}])


var boardGames =[ {

		name: 'Scrabble',
		type: 'Family Game',
		quick info: 'In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.',
		price: 8.99,
	},
	{
		name: 'Twilight Struggle',
		type: 'Strategy Game',
		quick info: 'In 1945, unlikely allies toppled Hitler's war machine, while humanity's most devastating weapons forced the Japanese Empire to its knees in a storm of fire. Where once there stood many great powers, there then stood only two. The world had scant months to sigh its collective relief before a new conflict threatened. Unlike the titanic struggles of the preceding decades, this conflict would be waged not primarily by soldiers and tanks, but by spies and politicians, scientists and intellectuals, artists and traitors. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. The entire world is the stage on which these two titans fight to make the world safe for their own ideologies and ways of life. The game begins amidst the ruins of Europe as the two new "superpowers" scramble over the wreckage of the Second World War, and ends in 1989, when only the United States remained standing.', 
		price: 25.99,
	}



]