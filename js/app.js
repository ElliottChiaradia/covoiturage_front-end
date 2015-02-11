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
var apiPath ="https://covoiturag.cpnv-es.ch/api";

                        // A supprimer après test ----------------------------------------------------------------
window.localStorage.setItem('userToken', 'asdf');
window.localStorage.setItem('userId', '103');
var tokenValue = window.localStorage.getItem('userToken');

function getToken(){
    var tokenValue =  window.localStorage.getItem('userToken');
    if(tokenValue){
        return tokenValue;
    }else{
        alert("pas de token noob");
        return false;
    }
}
                        // ---------------------------------------------------------------------------------------


//Redirection
/* A décommenter après les tests ----------------------------------------------------------------------------------------------
function redirect(){
    document.location.href="index.html";
}

function errorTreatment(status){

    switch(status){
        case 401:
            redirect();
            window.localStorage.removeItem("userToken");
            window.localStorage.setItem( 'error', 401);
            break;
        case 402:
            redirect();
            alert(status);
            break;
        case 403:
            redirect();
            alert(status);
            break;
        case 404:
            redirect();
            alert(status);
            break;
        default:
            redirect();
    }

}
------------------------------------------------------------------------------- */

//au moment de la connexion (avec email et mdp cpnv) création d'un espace dans le localstorage où sont stocké l'id et le token de l'utilisateur (en dure pour l'instant puis pris depuis l'API)
//id de l'utilisateur
//window.localStorage.setItem( 'userId', '103');
//token de l'utilisateur


//pour détruire un item du local storage :
//window.localStorage.removeItem( 'item_name' );

/* A décommenter après tests ------------------------------------------------------------------------------
function getToken(){
    var tokenValue =  window.localStorage.getItem('userToken');
    if(tokenValue){
        return tokenValue;
    }else{
        window.location.href = "index.html";
        return false;
    }
}
--------------------------------------------------------------------------------------------------------------*/

function getId(){
    return window.localStorage.getItem('userId');
}
//gestion des routes et des controllers associés
app.config(function($routeProvider){
   $routeProvider
       .when('/home', {templateUrl: 'pages/home.html', controller: 'homeCtrl'})
       .when('/tes_trajets', {templateUrl: 'pages/tes_trajets.html', controller: 'tesTrajetsCtrl'})
       .when('/conducteur', {templateUrl: 'pages/creation_trajet.html'})
       .when('/passager', {templateUrl: 'pages/passager.html', controller: 'passagerCtrl'})
       .when('/menu', {templateUrl: 'pages/menu.html'})
       .when('/donnees_personnelles', {templateUrl: 'pages/donnees_personnelles.html',  controller: 'donneesPersonnellesCtrl'})
       .when('/about', {templateUrl: 'pages/about.html'})
       .when('/blog', {templateUrl: 'pages/blog.html'})
       .when('/details', {templateUrl: 'pages/details_trajet.html'})
       .otherwise({redirectTo: '/home'});
});
mainControllers = angular.module('dataControllers',[]);
