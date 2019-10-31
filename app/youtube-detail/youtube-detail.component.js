'use strict';

// Register `youtubeDetail` component, along with its associated controller and template
angular.
  module('youtubeDetail').
  component('youtubeDetail', {
    templateUrl: 'youtube-detail/youtube-detail.template.html',
    controller: ['$routeParams','Youtube', '$location',
      function YoutubeDetailController($routeParams, Youtube, $location) {
        
        console.trace('YoutubeDetailController');
        self = this;
        let videoId = $routeParams.videoId;
        self.video = {};

        Youtube.getById(videoId).then(
          function (response) {
            console.trace("Success");
            self.video = response.data;
          },
          function (response) {
            console.warn('Error 404: Video Not Found %o', response);
            $location.url('/404');
          } 
        );
         
        
      }
    ]
  });