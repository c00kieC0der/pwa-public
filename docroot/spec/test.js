/**
 * Created by ecook on 6/26/16.
 */
var hf = require('../js/helper_functions.js');
describe('Helper Functions ', function(){
    it(' - isNumeric to work fully', function(){
        expect(hf.isNumeric('NaN')).toBe(false);
        expect(hf.isNumeric(4)).toBe(true);
        expect(hf.isNumeric('4')).toBe(false);
    });

});