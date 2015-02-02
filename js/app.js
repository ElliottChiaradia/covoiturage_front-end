document.addEventListener('deviceready', function(){
    //code à exécuter au démarrage de l'app
}, false);

var app = angular.module("app", [
    'ngRoute',
    'dataControllers'
]);

//URL de l'API
var apiPath ="http://covoiturag.cpnv-es.ch/api";


app.config(function($routeProvider){
   $routeProvider
       .when('/home', {templateUrl: 'pages/home.html', controller: 'homeCtrl'})
       .when('/tes_trajets', {templateUrl: 'pages/tes_trajets.html', controller: 'tesTrajetsCtrl'})
       .when('/conducteur', {templateUrl: 'pages/creation_trajet.html'})
       .when('/passager', {templateUrl: 'pages/passager.html'})
       .when('/menu', {templateUrl: 'pages/menu.html'})
       .when('/donnees_personnelles', {templateUrl: 'pages/donnees_personnelles.html',  controller: 'donneesPersonnellesCtrl'})
       .when('/about', {templateUrl: 'pages/about.html'})
       .when('/blog', {templateUrl: 'pages/blog.html'})
       .when('/details', {templateUrl: 'pages/details_trajet.html'})
       .otherwise({redirectTo: '/home'});
});
countryControllers = angular.module('dataControllers',[]);
