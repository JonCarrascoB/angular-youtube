var VideosController = (function () {
    function VideosController($scope) {
        this.$scope = $scope;
        $scope.vm = this;
        $scope.vm.titulo = "Listado de Videos";
    }
    VideosController.$inject = ["$scope"];
    return VideosController;
}());
//# sourceMappingURL=VideosController.js.map