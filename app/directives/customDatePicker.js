
/**
 * Created by kiran on 8/25/2015.
 */
app.directive('customDatePicker',[function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            var maxDate=attrs["maxdate"];
            var minDate=attrs["mindate"];
            element.datepicker({maxDate:maxDate,minDate:minDate});
        }
    }
}]);