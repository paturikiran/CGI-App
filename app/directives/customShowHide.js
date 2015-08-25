/**
 * Created by kiran on 8/25/2015.
 */
app.directive('customShowHide',[function(){
    return{
        restrict:"EA",
        //template:"<h1>Hello Guys I am the directive</h1>"
        templateUrl:"app/templates/cars.html"
        //controller:'vehicleCtrl'

    }
}]);