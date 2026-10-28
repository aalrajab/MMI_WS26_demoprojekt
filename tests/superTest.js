const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

describe('Temperature API', function () {

    it('should convert 0°C to 32°F via API', async function () {
        const response = await request(app)
            .post('/api/fromCelsiusToFahrenheit')
            .send({ temperature: 0 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(32);
    });

    it('should convert 212°F to 100°C via API', async function () {
        const response = await request(app)
            .post('/api/fromFahrheitToCelsius')
            .send({ temperature: 212 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(100);
    });

});