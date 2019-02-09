const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    
    expect(res)
        .toBeA('number')
        .toBe(44);
});

it('should square a number', () => {
    var res = utils.square(3);

    expect(res)
        .toBeA('number')
        .toBe(9);
});

it('should verify first and last names are set', () => {
    var testUserObj = {};
    var testName = 'Dylan Pomeroy'

    var res = utils.setName(testUserObj, testName);

    expect(res)
        .toBeA('object')
        .toInclude({
            firstName: 'Dylan',
            lastName: 'Pomeroy'
        })
})

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum)
            .toBe(7)
            .toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square)
            .toBeA('number')
            .toBe(9);
        done();
    });
});

// it('should expect some values', () => {
//     // expect(12)
//     //     .toNotBe(12)

//     // expect({name: 'Dylan'})
//     //     .toEqual({name: 'Dylan'})

//     // expect([2, 3, 4])
//     //     .toExclude(1);

//     // expect({
//     //     name: 'Dylan',
//     //     age: 23,
//     //     location: 'Toronto'
//     // }).toExclude({
//     //     age: 25,
//     // })
// });