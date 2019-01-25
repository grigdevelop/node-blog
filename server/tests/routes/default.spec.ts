import { expect } from 'chai';
import { app } from './../../src/app';
import request = require('request');

describe('Should get /', () => {
    let server;

    before((done) => {
        server = app.listen(3333, () => {
            console.log('Listening test host 3333...');
            done();
        });
    });

    after((done) => {
        server.close();
        done();
    });

    it('should say hello', (done) => {
        request('http://localhost:3333/', (error, response, body) => {
            const data = JSON.parse(body);
            expect(data.message).to.equal('Hello, World!');
            done();
        });
    });

});