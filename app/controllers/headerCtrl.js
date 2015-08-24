
app.controller('headerCtrl',['$scope',function($scope){

    //Best Practice
    //Create a init method to define all the initial
    //values for the scope.

    var init = function(){
        $scope.menuItems = [
            {displayName:"Home",class:"active"},
            {displayName:"Men",class:""},
            {displayName:"Electronics",class:""},
            {displayName:"Women",class:""},
            {displayName:"Kids",class:""}
        ];
    };

    $scope.selectedNavigation = function(menu){
        angular.forEach($scope.menuItems,function(item){
           item.class= menu.displayName ===item.displayName ? "active":"";
        });
    };
    init();
}]);