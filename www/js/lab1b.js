angular.module('lab1b',[])
	.controller('lab1bController', function($scope){
		 $scope.angular_input = []; 
		  $scope.angular_filters = [
		    {  id:3,
		       currency_1: "500000",
		       number_1:   "345645",
		       date_1: '1288323623006',
		       capital: "Santa Marta",
		       letras : "Santa Marta la perla de america",
		       numeros : [1,2,3,4,5,6,7,8,9]
		    },
		    {  
		       id:1,
		       currency_1: "340000",
		       number_1:   "34885",
		       date_1: '1288323623006',
			   capital: "Barranquilla",
			   letras : "Barranquilla ciudad de cantores",
		       numeros : [50,30,40,60,70,80]
		    },
		    {  id: 5,
		    	currency_1: "100000",
		    	number_1:  "34335",
		    	date_1: '1288323623006',
		    	capital: "Cartagena",
		    	letras : "Cartagena de Indias",
		       	numeros : [5,10,15,20,25,30]
		    		
		    }		    
    
  		];

  		
  		$scope.eventoClick = function(){
  		/*
  		$scope.angular_input = [
  		{
  		 campoText : this.ejemploText.text,
  		 campoNumber : this.ejemploNumber.value,
  		 campoUrl : this.ejemploUrl.text,
  		 campoEmail : this.ejemploEmail.text,
  		 campoFecha : this.ejemploFecha,
  		 campoTime :this.ejemploTime.value,
  		 campoDataTime : this.ejemploDataTime.value,
  		 campoMonth : this.ejemploMonth.value,
  		 campoSemana : this.ejemploWeekYear
  		}
  		
  		]; */
  		/*vector*/
  		
   		
   		var obj = {
  		 campoText : this.ejemploText.text,
  		 campoNumber : this.ejemploNumber.value,
  		 campoUrl : this.ejemploUrl.text,
  		 campoEmail : this.ejemploEmail.text,
  		 campoFecha : this.ejemploFecha,
  		 campoTime :this.ejemploTime.value,
  		 campoDataTime : this.ejemploDataTime.value,
  		 campoMonth : this.ejemploMonth.value,
  		 campoSemana : this.ejemploWeekYear,
       campoCheck : this.ejemploCheck,
       campoRadio : this.ejemploRadio

  		};
         
         $scope.angular_input.push(obj);

  		};/*Funcion*/		  
		 
		}
	);

