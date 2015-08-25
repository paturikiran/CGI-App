/**
 * Created by kiran on 8/25/2015.
 */
app.filter('phoneFormatter',[function(){

    return function(input,filteringCriteria){
        var phoneNumber =""+input;
        if(phoneNumber.length==10){
            var firstThreeDig = input.substring(0,3);
            var secondThreeDig = input.substring(3,6);
            var lastDig = input.substring(6,10);
            return '('+firstThreeDig+')-'+secondThreeDig+'-'+lastDig;
        }
        return input;
    }
}]);