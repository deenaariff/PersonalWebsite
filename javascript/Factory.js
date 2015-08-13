var myApp = angular.module('myApp', ['app.services'])

myApp.service('Products', function ( {
     
    this.products = function () {

    	var a = ['product1', 'product2', 'product3']; 
    	return a;

    };
     
});
