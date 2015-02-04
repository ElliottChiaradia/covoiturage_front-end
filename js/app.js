document.addEventListener('deviceready', function(){
    //code à exécuter au démarrage de l'app
}, false);

var app = angular.module("app", [
    'ngRoute',
    'dataControllers',
    'angular-loading-bar'
]);

//date format
angular.module('app').filter('date', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }

        var newDate = new Date(input);

        return ("0" + newDate.getDate()).slice(-2)+'.'+("0" + (newDate.getMonth() + 1)).slice(-2)+'.'+newDate.getFullYear();

    };
});

//URL de l'API
var apiPath ="http://covoiturag.cpnv-es.ch/api";

//au moment de la connexion (avec email et mdp cpnv) création d'un espace dans le localstorage où sont stocké l'id et le token de l'utilisateur (en dure pour l'instant puis pris depuis l'API)
//id de l'utilisateur
window.localStorage.setItem( 'userId', '103');
//token de l'utilisateur
window.localStorage.setItem( 'userToken', 'dd34a21535e2d646f0ac8ce23ba39955');

//pour détruire un item du local storage :
//window.localStorage.removeItem( 'item_name' );

//à chaque requête, vérifier que le token existe. Si non, demander la connexion
function checkIfTokenExists(){

    var exists = false;
    var tokenValue = window.localStorage.getItem( 'userToken' );

    if(tokenValue){
        exists = tokenValue;
    }

    return exists;
}

//gestion des routes et des controllers associés
app.config(function($routeProvider){
   $routeProvider
       .when('/home', {templateUrl: 'pages/home.html', controller: 'homeCtrl'})
       .when('/tes_trajets', {templateUrl: 'pages/tes_trajets.html', controller: 'tesTrajetsCtrl'})
       .when('/conducteur', {templateUrl: 'pages/creation_trajet.html'})
       .when('/passager', {templateUrl: 'pages/passager.html'})
       .when('/menu', {templateUrl: 'pages/menu.html'})
       .when('/donnees_personnelles', {templateUrl: 'pages/donnees_personnelles.html'})
       .when('/about', {templateUrl: 'pages/about.html'})
       .when('/blog', {templateUrl: 'pages/blog.html'})
       .when('/details', {templateUrl: 'pages/details_trajet.html'})
       .otherwise({redirectTo: '/home'});
});
countryControllers = angular.module('dataControllers',[]);
