/***********************************************************
 * 1. Declaracion de la App
 * 2. Registrar servicios y modulos en la app
 * 3. Configuracion de las rutas
 * 4. Ejecutar la App
 **********************************************************/

// 1. declaracion de la app
const app = angular.module("iparTube", // nombre de la App o modulo principal
                          ["ui.router"]  // inyeccion de modulos o librerias
);

// 2. registrar servicios y modulos en la app
app
    .service("videoService", VideoService)
    .controller("videosController", VideosController)
    .controller("categoriasController", CategoriasController);

// 3. configuracion de rutas
app.config([
    "$urlRouterProvider",
    "$stateProvider",
    ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
    console.log("Entrando en la configuracion de rutas");
        
        // si no escribimos nada que vaya al estado de home
        $urlRouterProvider.when("", "/home");
        $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "views/home.html"        
        })
        .state("videos", {
            url:"/leeme",
            templateUrl: "views/videos.html",
            controller: VideosController
        })
        .state("categorias",{
            url:"/categorias",
            templateUrl: "views/categorias.html",
            controller: CategoriasController
        })
        /*
        .state("app", {
            url: "/app",
            abstract: true,
            template: "<div ui-view></div>",
            resolve: {
                clasificacionMundial: [
                    "ergastService",
                    (ergastService: IErgastService) => ergastService.getDrivers()
                ]
            }
        })*/
        
    }
]); // configuracion de rutas

// mapa de visualizacion de rutas
const Visualizer = window["ui-router-visualizer"].Visualizer;

// 4. Ejecutar App
app.run([
    "$uiRouter",
    $uiRouter => {
        const pluginInstance = $uiRouter.plugin(Visualizer);
    }
]);