countryControllers.controller('tesTrajetsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {

        if (checkIfTokenExists()) {
            //on prend le token (puisqu'il existe)
            tokenValue = window.localStorage.getItem( 'userToken' );
            //on prend l'id de l'utilisateur
            idValue = window.localStorage.getItem( 'userId' );

            //on effectue la requête http
            $http.get(apiPath + '/users/'+ idValue +'?token=' + tokenValue).success(function (data) {
                //console.log(data);
                $scope.user = data;
            });
        }else{
            alert('Pas de token trouvé !');
        }

    }]);

