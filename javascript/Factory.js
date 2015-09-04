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

	var projects = {content:null};

	$http.get('http://localhost:3000/').success(function(data) {
		projects.content = data;
	});

	console.log(projects);

	return {
		getProjects: function () {
			return projects;
		}
	};

});

