/**
 * Created by kiran on 8/25/2015.
 */
app.directive('customClick',[function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            var ele =element.find('a');
            var panel = element.find('.panel-body')
            ele.bind('click',function(){
                    panel.toggle();
            })
        }
    }
}]);