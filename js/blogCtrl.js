/**
 * Created by Elliott.CHIARADIA on 16.03.2015.
 */
mainControllers.controller('blogCtrl', ['$scope', '$routeParams', '$http', 'myCache',
    function($scope, $routeParams, $http, myCache) {

        //on effectue la requête http
        $http.get(apiPath + '/facebook?token=' + getToken(), {cache:myCache}).success(function (data) {
            $scope.posts = data;
        });
    }]);