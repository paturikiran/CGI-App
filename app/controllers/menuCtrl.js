/**
 * Created by kiran on 8/24/2015.
 */
angular.module('vehicleInventory')
       .controller('menuCtrl',['$scope','menuService',
        function($scope,menuSvc){
        var init=function(){
            $scope.menuItems=[];
            $scope.selectedTemplate="";
            getMenuItems();
        };

            var getMenuItems= function(){
                menuSvc.getMenuItems().then(function(response){
                   $scope.menuItems = response.data.menu;
                });
            };
            $scope.navigate=function(menu){
                $scope.selectedTemplate=menu.htmlTemplate;
            };

        init()
    }]);