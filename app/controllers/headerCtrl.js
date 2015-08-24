
app.controller('headerCtrl',
    ['$scope',function($scope){

    //Best Practice
    //Create a init method to define all the initial
    //values for the scope.

    var init = function(){
        $scope.headerProperty="Iam the hedar";
        $scope.menuItems = [];
    };

    $scope.selectedNavigation = function(menu){
        angular.forEach($scope.menuItems,function(item){
           item.class= menu.displayName ===item.displayName ? "active":"";
        });
        $scope.selectedTemplate = menu.htmlTemplate;
    };
    init();
}]);