/**
 * Created by kiran on 8/25/2015.
 */
app.directive('customField',
    ['$compile',function($compile){
    return{
      restrict:"A",
        link:function(scope,element,attrs){
            scope.firstName="kiran";
            var template ="<h1>{{firstName}}</h1>";
             var el = angular.element(template);

            var compiled = $compile(el)
            element.append(el);
            compiled(scope);

        }
    }
}])