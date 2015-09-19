var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('MainCtrl', function($scope, $timeout, ProjectsService) {
	$scope.HeaderOne = "Projects";
	$scope.HeaderTwo = "Designs";
	$scope.HeaderThree = "Contact Me";
    $scope.buttons = [
        {name:'Intro'},
        {name:'Projects'},
        {name:'Design'},
        {name:'Contact'},
    ];

    $scope.projects = ProjectsService.getProjects();
    $scope.currentProject = 0;

    $scope.designs = ProjectsService.getDesigns();
    $scope.currentDesign = 0;

    $scope.programs = ProjectsService.getPrograms();

    $scope.experience = ProjectsService.getExperience();

    $scope.display = function(index) { 
        $scope.projects[$scope.currentProject].status = false; 
        $scope.projects[index].status = true;
        $scope.currentProject = index;
    };

    $scope.slideShow = function () {
        if ($scope.currentDesign === ($scope.designs.length-1))
            $scope.currentDesign = 0;
        else 
            ++$scope.currentDesign;
        $timeout($scope.slideShow(), 10000);
    }

     $scope.nextSlide = function () {
        if ($scope.currentDesign === ($scope.designs.length-1))
            $scope.currentDesign = 0;
        else 
            ++$scope.currentDesign;
    }

    $scope.navOn = false;
    $scope.resumeOn = false;

    $scope.showNav = function () {
        $scope.navOn = true;
    }

    $scope.hideNav = function () {
        $scope.navOn = false;
    }

    $scope.showRes = function () {
        $scope.resumeOn = true;
    }

    $scope.hideRes = function () {
        $scope.resumeOn = false;
    }

});



