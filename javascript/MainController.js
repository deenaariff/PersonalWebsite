var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('MainCtrl', function($scope, ProjectsService, Test) {
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

    $scope.projects = ProjectsService.getProjects();
    $scope.currentProject = 0;

    $scope.designs = ProjectsService.getDesigns();
    $scope.currentDesign = 0;


    $scope.display = function(index) { 
        $scope.projects[$scope.currentProject].status = false; 
        $scope.projects[index].status = true;
        $scope.currentProject = index;
    };

    $scope.slideShow = function () {
        if ($scope.currentDesign === Design.length-1)
            $scope.currentDesign = 0;
        else 
            $scope.currentDesign = $scope.currentDesign + 1;
        $timeout(slideShow, 2000);
    }

    function slideRight (position) {
        console.log(designs.length);
        if (position === (designs.length-1))
            position = 0;
        else 
            position= position + 1;
        return position;
    };

    function slideLeft (position) {
        if (position === 0)
            position = (designs.length-1);
        else 
            position = position - 1;
        return position;
    };

});



