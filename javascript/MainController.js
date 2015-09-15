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



