var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('MainCtrl', function($scope, ProjectsService) {
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
   	$scope.projects = ProjectsService.getProjects();

});



