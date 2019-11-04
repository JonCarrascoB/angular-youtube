interface ICategoriasControllerScope extends ng.IScope {
    vm: VideosController;
  }
  class CategoriasController implements ng.IController {
    
    public titulo: string;

    public static $inject = ["$scope"];
  
    constructor(private $scope: ICategoriasControllerScope ) {

    }
}