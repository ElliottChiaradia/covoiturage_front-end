mainControllers.controller('homeCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        /*$http.get('datas/' + $routeParams.countryId + '.json').success(function(data) {
         $scope.country = data;
         });*/
        //alert('doudasdfa');
        document.onload = checkError($scope);
        //document.onload = isConnect($scope);

        $scope.connect = function() {
            $scope.aCacher = {'display': 'none'};  // A supprimer après les tests -------------------------------------------------------------------------

             $http.post(apiPath+'/users/connexion',{"email":$scope.email, "password":$scope.password}).success(function(data, status)
             {
             alert(data);
            // window.localStorage.setItem('userToken',data['token']); A décommenter après test ---------------------------
            // window.localStorage.setItem('userId',data['id']); A décommenter après test ---------------------------
             $scope.aCacher={'display':'none'};

             }).error(function(data, status)
             {
             alert(status);
             errorTreatment(status);
             });
             };

             function checkError($scope){
             if(window.localStorage.getItem( 'error' )!=null)
             {
             $scope.errorValue="Erreur d'authentification - "+ window.localStorage.getItem('error');
             window.localStorage.removeItem('error');
             }
             isConnect($scope);
             }
             function isConnect($scope){
             if(window.localStorage.getItem("userToken")!=null)
             {
             $scope.aCacher={'display':'none'};
             }
             }

             }]);
