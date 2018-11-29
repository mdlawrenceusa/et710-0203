app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/Makeup.png',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: 'img/bhf.png',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Harry Potter & The Prisoner of Azkaban',
    	price: 11.99,
    	pubdate: new Date('1999', '07', '08'),
    	cover: 'img/Beauty.png',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Ready Player One',
    	price: 7.99,
    	pubdate: new Date('2011', '08', '16'),
    	cover: 'img/bhf.png',
    	likes: 0,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
