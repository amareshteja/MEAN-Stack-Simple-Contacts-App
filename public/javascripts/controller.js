/**
 * Created by Amaresh on 2/13/2016.
 */
var ang = angular.module('contactsApp',[]);
ang.controller('ContactCtrl', function ($scope,$http) {
    function refresh() {
        $http.get('/User').success(function (res) {
            $scope.contactList = res;
        });
    }
    refresh();
    $scope.submitData = function () {
        $http.post('/User',$scope.contact).success(function(res){
            refresh();
            $scope.contact = '';
        });
    };
    $scope.edit = function (id) {
        console.log(id)
        $http.get('/User/'+id).success(function(res){
            console.log(res);
            $scope.contact = res;
        });
    };
    $scope.remove = function (id) {
        console.log(id);
        var json = {'id':id};
        console.log(json)
        $http.delete('/User',json).success(function(res){
            console.log(res);
            refresh();
        });
    };
});
