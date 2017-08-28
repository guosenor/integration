/**
 * Created by guosen on 2017/8/28.
 */
var app = angular.module("app", ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
    $urlRouterProvider.otherwise('login');
}
]);