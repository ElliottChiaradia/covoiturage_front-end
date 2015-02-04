countryControllers.controller('donneesPersonnellesCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
$http.get(apiPath+'/users/'+getId()+'?token='+getToken()).success(function(data) {
    console.log(data);
    $scope.user = data;

}).error(function(err, status){
    console.log(status);
    errorTreatment(status);

});
$scope.submit = function () {
    $http.put(apiPath+'/users/'+getId()+'?token='+getToken(), $scope.user).success(function(data) {
        alert("Vous données ont été mises à jour avec succès !");
    }).error(function(error){
        alert("Une erreur est survenue. Veuillez réessayer plus tard.")
    });
};
}]);




