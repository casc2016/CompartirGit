angular.module('app.controllers', ['app.services'])
  
.controller('pageCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
	$scope.getProductList = function(){
		productService.item_list.query(function(data){

        	$scope.list = data;

        	console.log($scope.list);
    });
	}

	$scope.getProductDetail = function(){
		productService.item_detail.get({id: 7}, function(data){

        $scope.item = data;

        console.log($scope.item);
    });
	}


	var data = {		
        "name": "Galaxy Tab",
        "type": "smartphone",
        "quantity": 10,
        "price": 1200000
    };

/*save post*/
	$scope.productCreate = function(){
		productService.item_create.save(data, function(data){

        $scope.data = data;

        console.log($scope.data);
    });
	}

}])
 

 /*
angular.module('app.controllers', ['app.services'])
  
.controller('pageCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

	$scope.getProductList = function(){
		productService.item_list.query(function(data){

        	$scope.list = data;

        	console.log($scope.list);
    });
	}
}])
 */