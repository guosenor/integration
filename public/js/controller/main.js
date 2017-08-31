/**
 * Created by guosen on 2017/8/28.
 */
app.controller('mainController', ['$scope','$rootScope', '$state', '$location', '$timeout','$http',
    function ($scope,$rootScope,$state, $location,$timeout,$http) {
    $http.get('/api/user/userInfo').then(function (res) {
        $rootScope.user=res.data;
    }).catch(function (e) {
        $state.go('login');
    })
    }]);