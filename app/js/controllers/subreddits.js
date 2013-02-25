define(function () {
  'use strict';

  function SubredditsCtrl($scope, $routeParams, $location, $http) {
    $scope.posts = [];
    $http.jsonp('http://reddit.com/r/lolcats.json?jsonp=JSON_CALLBACK').
      success(function(data){
        $scope.posts = data.data.children;
      });
  }

  SubredditsCtrl.$inject = ['$scope', '$routeParams', '$location', '$http'];

  return SubredditsCtrl;
});