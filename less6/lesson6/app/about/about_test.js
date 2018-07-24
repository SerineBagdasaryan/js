'use strict';

describe('myApp.about module', function() {

  beforeEach(module('myApp.about'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('aboutCtrl');
      expect(aboutCtrl).toBeDefined();
    }));

  });
});