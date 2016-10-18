'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules
const textArray = [];
const textArray2 = [];

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructions
demoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  $log.debug('init cowsayCtrl');
  this.title = 'Moooooo';
  this.history = [];

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

  this.speak = function(input){
    $log.debug('this.updateCow()');
    this.spoken = '\n' + cowsay.say({text: input || 'gimme something to say!'});
    this.history.push(this.spoken);
  };

  this.undo = function(){
    $log.debug('this.undo()');
    this.spoken = this.history.pop() || '';
  };

}

demoApp.controller('NavController', [ '$log', NavController]);

function NavController($log){

  this.routes = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Hax',
      url: '/hax',
    },
  ];

}
