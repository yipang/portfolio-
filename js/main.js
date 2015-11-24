// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
    })
})

myApp.controller('HomeController', function($scope) {
    $scope.intro = "This is my first personal portfolio"
})

myApp.controller('ProjectsController', function($scope) {
    $scope.url1 = 'img/mulan.png'
    $scope.url2 = 'img/coffee.png'
    $scope.url3 = 'img/spotify.png'
    $scope.urlm = 'http://students.washington.edu/yip3/info343/git-started/'
    $scope.urlc = 'http://students.washington.edu/yip3/info343/dawg-coffee/'
    $scope.urls = 'http://students.washington.edu/yip3/info343/spotify-template/'
})

myApp.controller('AboutController', function($scope) {
    $scope.aboutme = 'Yi Pang, a informatics major student. This is the first time learning clident-side web development';
})

myApp.controller('ContactController', function($scope) {
    $scope.mail = "pangyibobo@gmail.com"
})

myApp.controller('myCtrl', function($scope, $http){
    $http.get('list.json').then(function(response) {
        $scope.data = response.data
        console.log($scope.data)
    })
})
