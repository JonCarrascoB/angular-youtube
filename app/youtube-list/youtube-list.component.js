'use strict';

// Register `youtubeList` component, along with its associated controller and template
angular.
  module('youtubeList').
  component('youtubeList', {
    templateUrl: 'youtube-list/youtube-list.template.html',
    controller: ['Youtube',
      function YoutubeListController(Youtube) {
        
        console.trace('YoutubeListController');
        self = this;
        self.titulo = "Listado de Videos";
        self.videos = {};
        
        Youtube.getAll().then( 
          function successCallback(response) {
            console.trace("Success");
            self.videos = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );
        //this.orderProp = 'age';
      }
    ]
  });