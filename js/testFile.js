describe('Practice', function(){
    beforeEach(module('MyApp'));
    var ctrl, loadArtists, rootscope, dataFactory, location, route, mockBackend;
    beforeEach(inject(function($controller, $rootScope, DataFactory, $location, $route, $httpBackend){
        location = $location;
        route = $route;
        mockBackend = $httpBackend;
        mockBackend.expectGET('artists.json').respond(200, 'getting data');
        mockBackend.expectGET('../partials/launch.html').respond(200, 'launch html');
        rootscope = $rootScope;
    }));
    it('should call through DataFactory', function(){
        expect(location.path()).toEqual('');
        location.path('/');
        mockBackend.flush();
        rootscope.$digest();
        expect(location.path()).toEqual('/');
        expect(route.current.controller).toBe('LaunchCtrl');
    });
    afterEach(function(){
        mockBackend.verifyNoOutstandingExpectation();
        mockBackend.verifyNoOutstandingRequest();
    })
});