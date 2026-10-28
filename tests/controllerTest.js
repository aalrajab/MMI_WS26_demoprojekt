const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

describe('Temperature conversion', function () {

    it('should convert 0°C to 32°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });

    it('should convert 32°F to 0°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
    });

    it('should convert 212°F to 100°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
    });

    
});