mainControllers.controller('homeCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        /*$http.get('datas/' + $routeParams.countryId + '.json').success(function(data) {
         $scope.country = data;
         });*/
        //alert('doudasdfa');
        document.onload = checkError($scope);
        $scope.connect = function(){
            $scope.aCacher={'display':'none'};

        };

        function checkError($scope){
            if(window.localStorage.getItem( 'error' )!=null)
            {
                $scope.errorValue=window.localStorage.getItem('error');
                window.localStorage.removeItem('error');
            }
        }
    }]);
