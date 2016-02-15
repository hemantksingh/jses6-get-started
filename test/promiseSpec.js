'use strict';

import { expect } from 'chai';
import Shop from '../src/shop.js';

/*Testing asynchronous code
*
* The 'done' callback is used to notify the test framework 'mocha' that
* the test has completed. Asynchronous code can call 'done' to notify
* this test completion.
*
* Promises allow us to write asynchronous code. In order to test the behaviour
  or result of the promise the assertion needs to be made in the asynchronous
  callback. In order to invoke the assertion, 'done' is called to notify
  completion of the test.

  This is highlighted in the test below.
*/

describe('Promise', () => {

    /*
    * It is worth noting that the callback is not executed inline and put
    * on the call-stack even if the promise resolves straightaway. This
    * means `async = true` is executed first and then the callback.*/

    it('is asynchronous', (done) => {

        let async = false;
        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve();
        });

        promise.then(() => {
            // callback
            expect(async).to.be.true;
            done();
        });

        async = true;
    });

    it('invokes the callback given to then', (done)=> {

        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve();
        });

        promise.then(() => {
            expect(1).to.eq(1);
            done();
        });
    });

    it('receives the resolved data', (done)=> {

        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve(1);
        });

        promise.then((data) => {
            expect(data).to.eq(1);
            done();
        });
    });

    it('fails when rejected', (done)=> {

        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            reject(Error('Oops! Something went wrong.'));
        });

        promise.catch((error) => {
            expect(error.message).to.eq('Oops! Something went wrong.');
            done();
        });
    });

    it('can be composed of another promise', (done)=> {

        let previousPromise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve(2);
        });

        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
           resolve(previousPromise);
        });

        promise.then((data) => {
            expect(data).to.eq(2);
            done();
        });
    });

    it('can be composed of another promise', (done)=> {

        let previousPromise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve(2);
        });

        let promise = new Promise((resolve, reject) => {
            /*jshint unused: false */
            resolve(previousPromise);
        });

        promise.then((data) => {
            expect(data).to.eq(2);
            done();
        });
    });

    it('can be resolved statically', (done)=> {

        let previousPromise = Promise.resolve(2);
        let promise = Promise.resolve(previousPromise);

        promise.then((data) => {
            expect(data).to.eq(2);
            done();
        });
    });

    it('can be rejected statically', (done)=> {

        let promise = Promise.reject(new Error('Oops! Something went wrong.'));

        promise.catch((error) => {
            expect(error.message).to.eq('Oops! Something went wrong.');
            done();
        });
    });

    it('can chain sequentially', (done) => {
        let shop = new Shop();

        shop.getOrder(1)
            .then((order) => {
                return shop.getUser(order.userId);
            }).then((user) => {
                return shop.getCompany(user.companyId);
            }).then((company) => {
                expect (company.name).to.eq('iNivaran');
                done();
            }).catch((error) => {
                console.log(error.message);
            });
    });
});