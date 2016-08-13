angular.module('app.controllers',  ['ngCordova'])
  
.controller('pluginsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('deviceCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {

		$scope.getDeviceInformation = function(){

		    $scope.device = $cordovaDevice.getDevice();

   		    $scope.cordova = $cordovaDevice.getCordova();

    		$scope.model = $cordovaDevice.getModel();

    		 $scope.platform = $cordovaDevice.getPlatform();

    		$scope.uuid = $cordovaDevice.getUUID();

		    $scope.version = $cordovaDevice.getVersion();

			
		}
}])
   
.controller('deviceMotionCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
	 

// watch Acceleration profesor
  	var options = { frequency: 2000 };
  	var watch = $cordovaDeviceMotion.watchAcceleration(options);
	$scope.getWatchDeviceMotion = function(){
		 watch.then(null,
		 	function(err) {
	      		alert('Algo salio mal ', err);
	    	}
		 	,function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    });
	}

	$scope.getStopWatchDeviceMotion = function(){
		$cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        alert('Stop Accelerometer');
        }, function (error) {
        // error
      });
	};

}])
   
.controller('networkCtrl', ['$scope', '$stateParams', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {

	$scope.getDeviceInformation = function(){

		    $scope.type = $cordovaNetwork.getNetwork();
		    $scope.isOnline = $cordovaNetwork.isOnline();
		    $scope.isOffline = $cordovaNetwork.isOffline();   	
			/*
			$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      			$scope.onlineState = networkState;
    		})

    		 $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      			$scope.offlineState = networkState;
    		})*/

		}


		
	$scope.linkFn = function($scope, $element, $attrs, $rootScope, $cordovaNetwork) {
    $scope.networkOffline = false;
    document.addEventListener("deviceready", function () {
      $scope.networkOffline = $cordovaNetwork.isOffline();
      // Online event
      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        $scope.networkOffline = false;
      });
      // Offline event
      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        $scope.networkOffline = true;
      });
    }, false);
  }


}])
   
.controller('deviceOrientationCtrl', ['$scope', '$stateParams', '$cordovaDeviceOrientation',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceOrientation) {

	var ctrOrienta =  $cordovaDeviceOrientation.getCurrentHeading();
	
	$scope.getDeviceOrientationInformation = function(){
		 ctrOrienta.then(null,
		 	function(err) {
	      		alert('MMMal ', err);
	    	}
		 	,function(result) {
		      $scope.magneticHeading = result.magneticHeading;		   
		      $scope.timeStamp = result.timestamp;
	   		 });
	}


	
}])
 

 .controller('dialogsCtrl', ['$scope', '$stateParams', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDialogs) {

	

	$scope.getDialogAlert = function(){
		
		$cordovaDialogs.alert('El usuario se x', 'Alert', 'Ok')
		    .then(function() {
		      console.log('Click en el boton');
		    });
		};

	$scope.getDialogConfirm = function(){
		$cordovaDialogs.confirm('El usuario selecciona la options', 'Confirm', ['Ok','Cancela'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      console.log(btnIndex);
		      localStorage.setItem('respuesta', btnIndex); 
    		});
	};

  
     $scope.getDialogPromtp = function(){
     	var respuestaOption = localStorage.getItem('respuesta');


     	$cordovaDialogs.prompt('gdsagdsg'+respuestaOption, 'El usuario selecciona la opcion:', ['cancelar','Aceptar'], 'default text')
		    .then(function(result) {
		      var input = result.input1;
		      $scope.mensaje = input;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
		      console.log(input, btnIndex);
    	});
     };
		
}])