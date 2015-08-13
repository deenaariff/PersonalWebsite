var myApp = angular.module('myApp', ['app.services'])

myApp.controller('MainCtrl', function($scope, Products) {
	$scope.HeaderOne = "Projects";
	$scope.HeaderTwo = "Designs";
	$scope.HeaderThree = "Contact Me";
    $scope.buttons = [
        {name:'Intro'},
        {name:'Projects'},
        {name:'Design'},
        {name:'Contact'},
    ];
    $scope.links = [
        {name:'LinkedIn', link: "LinkedIn.com"},
        {name:'GitHub', link: "Github.com/deenaariff"},
        {name:'Youtube', link: "youtube.com"},
        {name:'Facebook', link: "https://facebook.com/deen.aariff"},
        {name:'Email', link: "https://facebook.com/deen.aariff"},
    ];

    // getJSON
   	$scope.products = Products.products());

	});
});

