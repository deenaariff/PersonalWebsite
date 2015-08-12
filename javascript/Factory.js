var myApp = angular.module('myApp', ['app.services'])

myApp.factory('Products', function ($http) {
    return {
        get: function () {
            return $http.get('../data/projects.json');
        }
   	};
});
