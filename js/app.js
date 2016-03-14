angular.module('MyApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl: '../partials/launch.html',
            controller: 'LaunchCtrl',
            controllerAs: 'launchCtrl',
            resolve: {
                artistsPicsRotate : ['DataFactory', function(dataFactory){
                        var artistPics = [];
                        var artistData;
                        return dataFactory.getArtists().then(function(response){
                            artistData = response;
                            for(var i = 0; i < artistData.length; i++){
                                artistPics.push(artistData[i].images[0]);
                            }
                            return artistPics;
                        })
                }]
            }
        })
        .when('/home', {
            templateUrl: '../partials/home_artists.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl',
            resolve: {
                loadArtists: ['DataFactory', function(DataFactory){
                    return DataFactory.getArtists().then(function(response){
                        var allArtists = [];
                        var artistData = response;
                        for(var i = 0; i < artistData.length; i++){
                            allArtists.push({
                                name: artistData[i].name,
                                displayImage: artistData[i].images[0],
                                urlId: artistData[i].id
                            })
                        }
                        return allArtists;
                    });
                }]
            }
        })
        .when('/contact', {
            templateUrl: '../partials/contact.html'
        })
        .when('/about', {
            templateUrl: '../partials/about.html'
        })
        .when('/artist/:artistId', {
            templateUrl: '../partials/artist.html',
            controller: 'ArtistCtrl',
            controllerAs: 'artistCtrl',
            resolve: {
                artistData: ['DataFactory', '$route', function(DataFactory, $route){
                    return DataFactory.getArtists().then(function(response){
                        var artistData = response;
                        for(var i = 0; i < artistData.length; i++){
                            if(artistData[i].id == $route.current.params.artistId){
                                 return artistData[i];   
                            }
                        }
                    }) 
                }]
            }
        })
        .otherwise({redirectTo: '/home'});
    }])