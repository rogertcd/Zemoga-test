const app = require("../app");
const request = require("supertest");
// const app = require("../routes/portfolioRoutes");
// import request from "supertest";
// import app from "../routes/portfolioRoutes";

/**
 * Testing user's get data
 */
describe('GET /api/portfolio/find/', () => {

    it('It responds with json', (done) => {
        request(app)
            .get('/api/portfolio/find/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        done();
    }).timeout(10000);

    it('It responds with 200 status code', (done) => {
        request(app)
            .get('/api/portfolio/find/')
            .set('Accept', 'application/json')
            .expect(200, done);
        done();
    }).timeout(10000);
});

/**
 * Testing update users data
 */
describe('PUT /api/portfolio/update/', () => {
    it('It responds with json', (done) => {
        request(app)
            .put('/api/portfolio/update/')
            .set('Accept', 'application/json')
            .send({
                "id":3,
                "experience": "Ninguna",
                "imagePath": "",
                "name": "Vanessa",
                "twitterUser": "@vanne",
                "email": "vanessa@gmail.com",
                "address": "Tarija",
                "phone": "",
                "zipCode": "None"
            })
            .expect('Content-Type', /json/)
            .expect(200, done);
    }).timeout(10000);

    it('It responds with 200 status code', (done) => {
        request(app)
            .get('/api/portfolio/find/')
            .set('Accept', 'application/json')
            .expect(200);
        done();
    }).timeout(10000);
});
