interface IVideosControllerScope extends ng.IScope {
    vm: VideosController;
  }
  class VideosController implements ng.IController {
    
    public titulo: string;
    public videos: any;

    public static $inject = ["$scope"];
  
    constructor(private $scope: IVideosControllerScope ) {
        $scope.vm = this;

        $scope.vm.titulo = "Listado de Videos";
        


    }
}