var dry = angular.module('dry', []);

dry.controller("drycontrol", function ($scope, $http) {

    $scope.resLst = [];
    $scope.timeDate = new Date();
    
    $scope.save = function () {
        var dataSend={
        content:$scope.content
        };

         $http({
             method:"POST",
             data : dataSend,
             url:"http://localhost:5400/drycontent"
         }).then(function onSuccess(res){

             console.log(res.data);
              $scope.resLst.push(res.data);
              $scope.dispLst= angular.copy($scope.resLst);
              $scope.content="";

         },function onFailure(res){
              console.log("Its an error!!!");
         });

        // $.ajax({
        //     url: "http://localhost:5400/test",
        //     method: "GET"
        // }).then(function (res) {
        //     console.log(`response ${res}`);
        //     // $scope.resLst.push(res.data);
        // }, function (err) {
        //     console.log(`error ${err}`);
        //     window.test = err;
        // });

        // $http({
        //     method: "GET",
        //     url: "http://localhost:5400/test"
        // }).then(function (res) {
        //     console.log(`response ${res}`);
        //     // $scope.resLst.push(res.data);
        // }, function (err) {
        //     console.log(`error ${err}`);
        //     window.test = err;
        // });
    }
});

