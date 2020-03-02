'use strict';

var test = require('tape');
const request = require('supertest');
const app = require('../server');

test('index route', function(t) {
    request(app)
        .get('/')
        .expect(200)
        .end(function(err) {
            t.error(err, 'No error');
            t.end();
        });
});
