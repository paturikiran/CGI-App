/**
 * Created by kiran on 8/24/2015.
 */
/**
 * Created by kiran on 8/24/2015.
 */
angular.module('vehicleInventory')
    .service('vehicleService',['$http',function($http){
        return{
            getVehicles:function(){
                var url ='app/data/cars.json';
                return $http.get(url);
                //error
                //success
                //then
                //finally
                //catch
            }
        }
    }]);