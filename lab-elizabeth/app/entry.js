'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructions
demoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  $log.debug('init cowsayCtrl');
  this.title = 'I am Cow!';
  this.historyText = [];

  cowsay.list((err, cowFiles) => {
    this.cowFiles = cowFiles;
    this.currentCow = this.cowFiles[0];
  });

  this.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say!', f: this.currentCow});
  };

  this.speak = function(input){
    $log.debug('this.updateCow()');
    this.spoken = input;
    this.historyText.push(this.spoken);
    this.secondtext = this.historyText[this.historyText.length - 1];
  };

  this.undo = function(){
    $log.debug('this.undo()');
    this.historyText.pop();
    this.secondtext = this.historyText[this.historyText.length - 1] || '';
  };

}

demoApp.controller('NavController', [ '$log', NavController]);

function NavController($log){
  $log.debug('init navCtrl');

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
      name: 'Misc',
      url: '/misc',
    },
    {
      name: 'Whats with the hands?',
      url: '/whatswiththehands',
    },
  ];

}
