var app = angular.module('app',[])
.controller('Calculator',['$http','$scope',function($http,$scope){
	$scope.entries = ["AC","CE","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="];
    $scope.result = "";
    var collect = [];
    var value = "";
    $scope.display = "";
    var display = $scope.display;
	$scope.clickMe = function(obj){
		$scope.calculate(obj.entry);
   }

    function operation(){
    
        if(collect.length >=2){
            var operator = collect.pop();
            var value1 = Number(collect.pop());
            var value2 = Number(value);
            console.log(value1+operator+value2);
            switch(operator){
                case "/" : value = value1/value2;
                           break;
                case "*"  : value = value1*value2;
                            break;
                case "-"  : value = value1-value2;
                            break;
                case "+"  : value = value1+value2;

            }
         }
          collect.push(value);
          $scope.display = value;      
    }

	$scope.calculate = function(input){

    
    if(input == "*" || input == "/" || input == "+" || input == "-" ){
        operation();
        collect.push(input);
        value = "";
    }
    else if(input == "="){
        operation();       
    }
    else if(input== "AC" || input == "CE"){
            collect = [];
            $scope.display = "";
            value = "";
        }
    else if(input == "%"){

        var operator = collect.pop();
        var value2 = collect.pop();
        
        $scope.display = (value * value2)/100;
        collect.push(value2);
        collect.push(operator);
        value = $scope.display;
    }
    else{
        value = value + input;
        $scope.display = value;
    }
    	
	}
	

}])