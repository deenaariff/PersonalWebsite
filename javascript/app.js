angular.module('myApp', [])

	.controller('MainCtrl', function($scope) {
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
	    ];
});
