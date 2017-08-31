app.controller('loginController', ['$scope', '$state', '$location', '$timeout','$http',
    function ($scope, $state, $location,$timeout,$http) {
     $scope.username='';
     $scope.password='';
     $scope.loginFild=false;
     $scope.login=function () {
         $http.post('/api/user/login',{username:$scope.username,password:$scope.password})
             .then(function (res) {
                 if(res.data && res.data.status=='success'){
                     $state.go('main');
                 }
             }).catch(function (e) {
             $scope.loginFild=true;
         })
     };
     $scope.inputting=function () {
         $scope.loginFild=false;
     }
    }]);