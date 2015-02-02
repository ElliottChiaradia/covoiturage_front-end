countryControllers.controller('tesTrajetsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('http://covoiturag.cpnv-es.ch/api/users/1?token=asdf').success(function(data) {
            console.log(data);// $scope.country = data;
        });
        //alert('douddda');
    }]);

