angular.module('MyApp')
    .directive('launchRotate', ['$interval', function($interval){
        return{
            restrict: 'E',
            scope: {artistsPics: '='},
            link: function(scope, element, attr){
                var artistPicsArray = scope.artistsPics;
                var i = 0;
                element[0].style.backgroundImage = "url(" + artistPicsArray[i] + ")";
                element[0].style.backgroundPosition = 'center';
                element[0].style.backgroundSize = 'cover';
                $interval(function(){
                    if(i == artistPicsArray.length){
                        i = 0;
                        element[0].style.backgroundImage = "url(" + artistPicsArray[i] + ")";
                        element[0].style.backgroundPosition = 'center';
                        element[0].style.backgroundSize = 'cover';
                        ++i;
                    } else if( i == 0) {
                        i = 1;
                        element[0].style.backgroundImage = "url(" + artistPicsArray[i] + ")";
                        element[0].style.backgroundPosition = 'center';
                        element[0].style.backgroundSize = 'cover';
                        ++i;
                    }else {
                        element[0].style.backgroundImage = "url(" + artistPicsArray[i] + ")";
                        element[0].style.backgroundPosition = 'center';
                        element[0].style.backgroundSize = 'cover';
                        ++i;  
                    }
                }, 7000)
            }   
        }
    }])
    .directive('artistHome', [function(){
        return {
            restrict: 'E',
            scope: {artistData: '='},
            link: function(scope, element, attr){
                element[0].style.backgroundImage =  "url(" + scope.artistData.displayImage + ")";
                element[0].style.backgroundPosition = 'center';
                element[0].style.backgroundSize = 'contain';
            }
        }
    }])
    .directive('artistIndividual', [function(){
        return {
            restrict: 'E',
            scope: true,
            link: function(scope, element, attr){
            
            }
        }
    }]);