'use strict';

// require webpack assets
require('./scss/base.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules
const textArray = [];
const textArray2 = [];

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructions
demoApp.controller('CowsayController', [ '$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moooooo';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say!'});
  };

  cowsayCtrl.helloClick = function(input){
    $log.debug('cowsayCtrl.helloClick()');
    $log.debug(input);
    $log.debug(textArray);
    textArray.push(input);
  };

  cowsayCtrl.secondCow = function(input){
    $log.debug('cowsayCtrl.secondCow()');
    $log.debug(textArray2);
    return '\n' + cowsay.say({text: input || 'this should be the same as the other cow, what did you do?'});
  };

}
