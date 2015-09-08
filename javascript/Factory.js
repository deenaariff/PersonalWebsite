var Services = angular.module('Services',[])

Services.factory('ProjectsService', function () {
     
	var projects = ['project1', 'project2', 'project3']; 

    return {
    	getProjects : function () {
    		return projects;
   	    }	
   	};

});


Services.factory('Test', function ($http) {

	var projects = { 
	};

});

