'use strict';

// require webpack assets
require('./scss/base.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructors
demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Mooooooo';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say!'});
  };

  cowsayCtrl.helloCLick = function(input){
    $log.debug('cowsayCtrl.helloCLick()');
    $log.log(input);
  };

}
