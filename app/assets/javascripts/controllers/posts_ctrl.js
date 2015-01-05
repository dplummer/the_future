angular.module('futureApp.controllers').controller('PostsCtrl', [
    '$scope',
    '$http',

    function ($scope, $http) {
      $http.get('posts.json').
        success(function(data) {
          $scope.posts = data.posts;
        });
    }
]);
