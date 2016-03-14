angular.module('MyApp')
    .controller('LaunchCtrl',['artistsPicsRotate', function(APRotate){
        var self = this;
        console.log(APRotate);
        self.artistsPicsRotate = APRotate;
    }])
    .controller('HomeCtrl', ['loadArtists', function(loadArtists){
        var self = this;
        self.homeArtistsArray = [];
        self.homeArtistsArray = loadArtists; 
    }])
    .controller('ArtistCtrl', ['$routeParams', 'artistData', function($routeParams, artistData){
        var self = this;
        self.artistName = artistData.name;
        self.images = artistData.images
        self.showLightBox = false;
        self.lightBox = function(image){
            self.lightBoxImage = image;
            self.showLightBox = !self.showLightBox;
        };
        self.closeLightBox = function(){
            self.showLightBox = !self.showLightBox;
            self.lightBoxImage = "";
        };
        self.leftPicture = function(image){
            var imageIndex = findImage(image);
            if(imageIndex === 0){
                imageIndex = self.images.length - 1;
            } else {
                imageIndex = imageIndex - 1;   
            }
            self.lightBoxImage = self.images[imageIndex];
        };
        self.rightPicture = function(image){
            var imageIndex = findImage(image);
            if(imageIndex === (self.images.length -1)){
                imageIndex = 0;
            } else {
                imageIndex = imageIndex + 1;   
            }
            self.lightBoxImage = self.images[imageIndex];
        };
        
        
        function findImage(image){
            var imagesArray = artistData.images;
            for(var i = 0; i < imagesArray.length; i++){
                if(imagesArray[i] == image){
                    return i;   
                }
            }
        };
        
        
    }]);