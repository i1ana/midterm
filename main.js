 
angular.module('main', [])

angular.module('main')
	.controller('mainController', ['$scope', function($scope){

		$scope.list=[]
		$scope.text = 'hello'


$scope.boardGames =[ 
	{
		name: 'Scrabble',
		img: 'scrabble.jpg', 
		type: 'Family Game',
		description: 'In this classic word game players use their seven drawn letter tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already played tile or adds to an already played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.',
		price: 8.99,
	},
	{
		name: 'Twilight Struggle',
		img: 'twilightStruggle.jpg',
		type: 'Strategy Game',
		description: 'In 1945, unlikely allies toppled Hitler\'s war machine, while humanity\'s most devastating weapons forced the Japanese Empire to its knees in a storm of fire. Where once there stood many great powers, there then stood only two. The world had scant months to sigh its collective relief before a new conflict threatened. Unlike the titanic struggles of the preceding decades, this conflict would be waged not primarily by soldiers and tanks, but by spies and politicians, scientists and intellectuals, artists and traitors. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. The entire world is the stage on which these two titans fight to make the world safe for their own ideologies and ways of life. The game begins amidst the ruins of Europe as the two new "superpowers" scramble over the wreckage of the Second World War, and ends in 1989, when only the United States remained standing.', 
		price: 25.99,
	},
	{
		name: 'Monopoly',
		img: 'monopoly.jpg',
		type: 'Family Game',
		description: 'Players take the part of land owners, attempting to buy and then develop their land. Income is gained by other players visiting their properties and money is spent when they visit properties belonging to other players. When times get tough, players may have to mortgage their properties to raise cash for fines, taxes and other misfortunes.',
		price: 6.50,
	},
	{
		name: 'Cards Against Humanity',
		img: 'cah.jpg',
		type: 'Party Game',
		description: 'A party game for horrible people.',
		price: 15.99,
	}, 
	{
		name: 'The Settlers of Catan',
		img: 'catan.jpg',
		type: 'Strategy Game',
		description: 'Players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources (cards)—wood, grain, brick, sheep, or stone—to build up their civilizations to get to 10 victory points and win the game.',
		price: 30.99, 
	},
	{
		name: 'Codenames',
		img: 'codename.jpg',
		type: 'Party Game',
		description: 'Two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
		price: 11.99,
	}
]
console.log($scope.boardGames)


	$scope.games = function(boardGames){
		for(var i=0; i < boardGames.length; i++){
			return boardGames[i]
		}
		
	}

	$scope.games($scope.boardGames)


	// $scope.search = function(){
	// 	if ($scope.text) {
	// 		$scope.list.push(this.text)
	// 		$scope.text = ''
	// 	}
	// }

	// console.log($scope.text)

	}])