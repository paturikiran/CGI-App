
/**
 * Created by kiran on 8/24/2015.
 */
/**
 * Created by kiran on 8/24/2015.
 */
angular.module('vehicleInventory')
    .controller('vehicleCtrl',['$scope','vehicleService',
        function($scope,vehicleService){
            var init=function(){
                $scope.vehicles=[];
                $scope.searchVehicle="";
                getVehicles();
            };

            var getVehicles = function(){
                vehicleService.getVehicles()
                    .success(function(response){
                        $scope.vehicles= response.data;
                    }).error(function(response){
                        console.log(response.data);
                    });
            };
            init()
        }]);