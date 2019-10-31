'use strict';

angular.
  module('core.youtube').
  factory('Youtube', ['$http',  function($http) {

    let service = {};
    let endpoint = "http://localhost:3000/videos/";

    service.getAll = function(){      
        console.trace('GET ' + endpoint);
        return $http.get(endpoint);
     }

    service.getById = function( videoId ){
      let url = endpoint + videoId;
      console.trace('GET ' + url);
      return $http.get(url);
    }

    service.crear = function(video){
        let url = endpoint;
        console.trace('POST ' + endpoint);
        
    }
      return service;
    }

    
  ]);