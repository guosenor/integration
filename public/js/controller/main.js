/**
 * Created by guosen on 2017/8/28.
 */
app.controller('mainController', ['$scope','$rootScope', '$state', '$location', '$timeout','$http',
    function ($scope,$rootScope,$state, $location,$timeout,$http) {
    $scope.getUsers=function () {
        $http.get('/api/user').then(function (res) {
            $scope.users=res.data;
        }).catch(function (e) {

        })
    }
    $scope.getRoles=function () {
        $http.get('/api/role').then(function (res) {
            $scope.roles=res.data;
        }).catch(function (e) {

        })
    }
    $scope.userSelected=function (user) {
        if(user.selected){
            $scope.users.forEach(function (item) {
                if(item.selected && (item.id !== user.id)){
                    item.selected=false;
                }
            })
            $scope.roles.forEach(function (item1) {
                var isHave=false;
                user.roles.forEach(function (item2) {
                    if(item1.id==item2.id){
                        isHave=true;
                    }
                })
                item1.selected=isHave;
            })
        }else{
            $scope.roles.forEach(function (item) {
                item.selected=false;
            })
        }
    }
    $scope.userSelectRole=function (role) {
        // setTimeout(function () {
            console.log(role);
            var user=false;
            $scope.users.forEach(function (item) {
                if(item.selected){
                    user=item
                }
            })
            if(user){
                if(!role.selected){
                    $http.get('/api/user/removeRole',{params:{userId:user.id,roleId:role.id}})
                        .then(function () {
                            role.selected=false;
                            user.roles.forEach(function (item) {
                                if(item.id==role.id){
                                    user.roles.remove(item);
                                    console.log(user.roles);
                                }
                            })
                        })
                        .catch(function () {

                        })
                }else {
                    $http.get('/api/user/setRole',{params:{userId:user.id,roleId:role.id}})
                        .then(function () {
                            role.selected=true;
                            user.roles.push(role);
                        })
                        .catch(function () {

                        })
                }
            }
        // },1000)
    }
    $http.get('/api/user/userInfo').then(function (res) {
        $rootScope.user=res.data;
        $scope.getUsers();
        $scope.getRoles();
    }).catch(function (e) {
        $state.go('login');
    })
    }]);
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};