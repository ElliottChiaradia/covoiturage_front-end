countryControllers.controller('donneesPersonnellesCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get(apiPath+'/users/1?token=asdf').success(function(data) {
            console.log(data);
            $scope.user = data;

            $scope.submit = function () {
               alert('coucou');
            };


        });
    }]);




