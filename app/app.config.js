'use strict';

angular.
  module('youtubeApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/videos', {
          template: '<youtube-list></youtube-list>'
        }).
        when('/videos/:videoId', {
          template: '<youtube-detail></youtube-detail>'
        }).
        when('/menu', {
            template: '<menu></menu>'
          }).
        when('/404', {
          templateUrl: 'error/404.html'
        }).
        otherwise('/videos');
    }
  ]);