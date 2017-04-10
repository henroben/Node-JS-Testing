"use strict";

const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});

it('should return a user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Ben',
                age: 43
            });
        })
        .end(done);
});