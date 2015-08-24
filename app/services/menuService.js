/**
 * Created by kiran on 8/24/2015.
 */
angular.module('vehicleInventory')
.service('menuService',['$http',function($http){
        return{
            getMenuItems:function(){
                var url ='app/data/menu.json';
                return $http.get(url);
                //error
                //success
                //then
                //finally
                //catch
            }
        }
    }]);