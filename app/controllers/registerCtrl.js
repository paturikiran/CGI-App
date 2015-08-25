/**
 * Created by kiran on 8/25/2015.
 */
app.controller('registerCtrl',
    ['$scope',function($scope){
    $scope.headerLabel = "Register User";
        $scope.existingUser= {
            firstName:"Kiran",
            lastName:"PVS",
            email:"test@test.com",
            dob:"18/8/1996"
        };

        $scope.firstName ="abcd";


        $scope.registerUser=function(){
            console.log("User Registered");
        }


}]);