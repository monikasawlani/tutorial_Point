var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
   $scope.fun=function(){
    alert("hello");
   }
    
})