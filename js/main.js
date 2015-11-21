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

// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope) {
    $scope.words = 6;
})

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope) {
    $scope.about = "Some string";
})
