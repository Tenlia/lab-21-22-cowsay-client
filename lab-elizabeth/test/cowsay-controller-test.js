'use strict';

require('./lib/test-setup.js');

const cowsay = require('cowsay-browser');
const angular = require('angular');

describe('testing cowsayCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('testing initial properties', () => {
    it('title should equal "I am Cow!"', () => {
      expect(this.cowsayCtrl.title).toBe('I am Cow!');
    });

    it('historyText should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.historyText)).toBe(true);
    });

    it('cowFiles should be same as cowsay.list', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowFiles).toEqual(list);
        expect(this.cowsayCtrl.currentCow).toEqual(list[0]);
      });
    });
  });

  describe('testing #updateCow()', () => {
    it('should return a bevis.zen "greetings"', () => {
      let expectedResult = '\n' + cowsay.say({text: 'greetings', f: this.cowsayCtrl.currentCow});
      let result = this.cowsayCtrl.updateCow('greetings');
      expect(result).toEqual(expectedResult);
    });
    
    it('should return a bevis.zen "gimme something to say!"', () => {
      let expectedResult = '\n' + cowsay.say({text: 'gimme something to say!', f: this.cowsayCtrl.currentCow});
      let result = this.cowsayCtrl.updateCow('');
      expect(result).toEqual(expectedResult);
    });
  });

  describe('testing #speak()', () => {
    it('should return a "greetings"', () => {
      this.cowsayCtrl.speak('greetings');
      expect(this.cowsayCtrl.spoken).toEqual('greetings');
      expect(this.cowsayCtrl.historyText[0]).toEqual('greetings');
    });

    it('should return "gimme something to say!"', () => {
      this.cowsayCtrl.speak('');
      expect(this.cowsayCtrl.spoken).toEqual('gimme something to say!');
      expect(this.cowsayCtrl.historyText.length).toEqual(1);
    });
  });

  describe('testing #undo()', () => {
    it('should return ', () => {
      this.cowsayCtrl.speak('greetings');
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.secondtext).toEqual('');
      expect(this.cowsayCtrl.historyText.length).toEqual(0);
    });

    it('should return "greetings"', () => {
      this.cowsayCtrl.speak('greetings');
      this.cowsayCtrl.speak('salutations');
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.secondtext).toEqual('greetings');
      expect(this.cowsayCtrl.historyText.length).toEqual(1);
    });

    it('should return "salutations"', () => {
      this.cowsayCtrl.speak('greetings');
      this.cowsayCtrl.speak('salutations');
      this.cowsayCtrl.speak('good afternoon');
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.secondtext).toEqual('salutations');
      expect(this.cowsayCtrl.historyText.length).toEqual(2);
    });

    it('should return "greetings"', () => {
      this.cowsayCtrl.speak('greetings');
      this.cowsayCtrl.speak('salutations');
      this.cowsayCtrl.speak('good afternoon');
      this.cowsayCtrl.undo();
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.secondtext).toEqual('greetings');
      expect(this.cowsayCtrl.historyText.length).toEqual(1);
    });
  });

});
