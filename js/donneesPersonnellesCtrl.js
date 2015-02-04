countryControllers.controller('donneesPersonnellesCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
$http.get(apiPath+'/users/1?token=asdf').success(function(data) {
    console.log(data);
    $scope.user = data;

});
$scope.submit = function () {
    $http.put(apiPath+'/users/1?token=asdf', $scope.user).success(function(data) {
        alert("Vous données ont été mises à jour avec succès !");
    }).error(function(error){
        alert("Une erreur est survenue. Veuillez réessayer plus tard.")
    });
};
}]);




