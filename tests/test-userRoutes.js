'use strict';

var test = require('tape');
const request = require('supertest');
const app = require('../server');

var testUser = {
    body: {
        name: 'testName',
        userName: 'testUserName',
        password: 'testPassword'
    }
};

test('new user route', function(t) {
    request(app)
        .get('/user/new')
        .expect(200)
        .end(function(err) {
            t.error(err, 'No error');
            t.end();
        });
});

test('post new user', function(t) {
    request(app)
        .post('/user/', testUser)
        .expect(200)
        .end(function(err) {
            t.error(err, 'No error');
            t.end();
        });
});

