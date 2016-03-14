angular.module('MyApp')
    .factory('DataFactory', ['$http', function($http){
        return {
            getArtists: function(){
                    return $http.get('artists.json').then(function(response){
                        var artistData = response.data;
                        return artistData;
                });   
            }
        }
    }]);