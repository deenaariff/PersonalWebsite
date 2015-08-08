console.log("Angular App starting");

angular.module('app.services', [])
	console.log("Services is starting");
	.factory('Products', function ($http) {
	    return {
	        get: function () {
	            return $http.get('../data/projects.json');
	        }
	   	};
)};


angular.module('myApp', ['app.services'])

	.controller('MainCtrl', function($scope, Products) {
		$scope.HeaderOne = "Projects";
		$scope.HeaderTwo = "Designs";
		$scope.HeaderThree = "Contact Me";
	    $scope.buttons = [
	        {name:'Intro'},
	        {name:'Projects'},
	        {name:'Design'},
	        {name:'Contact'},
	        {name:'Login'},
	    ];
	    $scope.links = [
	        {name:'LinkedIn', link: "LinkedIn.com"},
	        {name:'GitHub', link: "Github.com/deenaariff"},
	        {name:'Youtube', link: "youtube.com"},
	        {name:'Facebook', link: "https://facebook.com/deen.aariff"},
	        {name:'Email', link: "https://facebook.com/deen.aariff"},
	    ];

	    // getJSON
	    Products.get().then(function (products) {
       		 $scope.products = products;
   		});

	    //$scope.products = JSON.parse("../data/projects.json");
	    $scope.productTitle = "Click a Project to Learn More";
	    $scope.date = "";
	    $scope.description = "";
	    /*$scope.product = function (index) {
			$scope.productTitle = json[index-1].title;
			$scope.date = json[index-1].year;
			$scope.description = json[index-1].description;
	    };*/
});


