var VideoService = (function () {
    function VideoService($http) {
        var _this = this;
        this.getVideos = function () {
            return _this.http.get("http://localhost:3000/videos/").then(function (result) {
                return result.data;
            });
        };
        this.getVideoDetails = function (id) {
            return _this.http
                .get("http://localhost:3000/videos/" + id)
                .then(function (response) {
                return response.data;
            });
        };
        this.http = $http;
    }
    return VideoService;
}());
//# sourceMappingURL=videoService.js.map