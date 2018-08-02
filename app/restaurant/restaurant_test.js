'use strict';

describe('myApp.restaurant module', function() {

    beforeEach(module('myApp.restaurant'));

    describe('restaurant controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var restaurantCtrl = $controller('RestaurantCtrl');
            expect(restaurantCtrl).toBeDefined();
        }));

    });
});