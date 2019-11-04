var app = angular.module("iparTube", ["ui.router"]);
app
    .service("videoService", VideoService)
    .controller("videosController", VideosController)
    .controller("categoriasController", CategoriasController);
app.config([
    "$urlRouterProvider",
    "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {
        console.log("Entrando en la configuracion de rutas");
        $urlRouterProvider.when("", "/home");
        $stateProvider
            .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
            .state("videos", {
            url: "/leeme",
            templateUrl: "views/videos.html",
            controller: VideosController
        })
            .state("categorias", {
            url: "/categorias",
            templateUrl: "views/categorias.html",
            controller: CategoriasController
        });
    }
]);
var Visualizer = window["ui-router-visualizer"].Visualizer;
app.run([
    "$uiRouter",
    function ($uiRouter) {
        var pluginInstance = $uiRouter.plugin(Visualizer);
    }
]);
//# sourceMappingURL=app.js.map