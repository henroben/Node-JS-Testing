"use strict";

const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

            // if(res != 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });

    describe('#square', () => {
        it('should return the square of supplied number', () => {
            let res = utils.square(3);

            expect(res).toBe(9).toBeA('number');

            // if(res != 9) {
            //     throw new Error(`Expected 9, but got ${res}`);
            // }
        });
    });

    describe('#asyncAdd', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done(); // use done to tell mocha it's asynchronous test
            });
        });
    });

    describe('#asyncSquare', () => {
        it('shoud return the async square of supplied number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9).toBeA('number');
                done();
            });
        });
    });

    describe('#setName', () => {
        it('should verify first and last names are set', () => {
            let user = {
                age: 43
            };

            let res = utils.setName(user, "Ben Mercer");

            expect(user).toBeA('object').toInclude({
                firstName: 'Ben',
                lastName: 'Mercer'
            });
        });
    });

});



// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Ben'}).toEqual({name: 'Ben'});
//     // expect([2,3,4]).toInclude(2).toExclude(1);
//     expect({
//         name: 'Ben',
//         age: '43',
//         location: 'Ipswich'
//     }).toExclude({
//         age: 25
//     });
// });