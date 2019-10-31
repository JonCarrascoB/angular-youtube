'use strict';

// Register `menu` component, along with its associated controller and template
angular.
  module('youtubeApp').
  component('menu', {
    templateUrl: 'menu/menu.template.html',
    controller: ['$routeParams',
    function navbarController($routeParams) {}

    ]
  });