/**
 * Created by kiran on 8/25/2015.
 */
app.directive('customRegister',[function(){
    return{
        templateUrl:"app/templates/register.html",
        scope:{
            header:"@",
            fname:"=",
            lname:"=",
            email:"=",
            dateOfBirth:"=",
            userRegistration:"&"

        }
    }
}]);