const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
chai.should();
const api = supertest.agent(server);
const expect = chai.expect;

describe('Temperature API', function () {

    it('should convert 0°C to 32°F via API', async function () {
        const response = await api
            .post('/api/fromCelsiusToFahrenheit')
            .send({ temperature: 0 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(32);
    });

    it('should convert 212°F to 100°C via API', async function () {
        const response = await api
            .post('/api/fromFahrheitToCelsius')
            .send({ temperature: 212 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(100);
    });

});