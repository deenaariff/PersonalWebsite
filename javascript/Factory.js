angular

    .module('myApp', ['app.services'])

    .factory('Products', function ($http) {
	    return {
	        get: function () {
	            return $http.get('../data/projects.json');
	        }
	   	};
)};
