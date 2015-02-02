countryControllers.controller('tesTrajetsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        if (checkIfTokenExists()) {
            //on prend le token (puisqu'il existe)
            tokenValue = window.localStorage.getItem( 'userToken' );

            //on effectue la requête http
            $http.get(apiPath + '/users/1?token=' + tokenValue).success(function (data) {
                //console.log(data);
                $scope.user = data;
            });
        }else{
            alert('Pas de token trouvé !');
        }

    }]);

