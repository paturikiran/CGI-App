/**
 * Created by kiran on 8/25/2015.
 */

app.directive('customParent',[function(){
    return{
        restrict:"A,E",
        compile:function(iElement,iAttrs) {
            console.log(iElement);
            console.log(iAttrs);
        },
        link:{
            pre:function(scope,element,attrs){
                scope.parentName="kiran";
                console.log('parent: pre-link');
            },
            post:function(scope,element,attrs){

                console.log('parent: post-link');
            }
        }
    }
}]);

/**
 * Created by kiran on 8/25/2015.
 */

app.directive('customChild',[function(){
    return{
        restrict:"A,E",
        link:{
            pre:function(scope,element,attrs){
                console.log('child: pre-link');
            },
            post:function(scope,element,attrs){
                console.log(scope.parentName);
                console.log('child: post-link');
            }
        }
    }
}])