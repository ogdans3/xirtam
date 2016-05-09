define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'matrixTest',

        pass: function () {
            var result = 2 + 3;

            assert.equal(result, 5,
                'Addition operator should add numbers together');
        },
        fail: function () {
            var result = 2 * 3;

            assert.equal(result, 5,
                'Addition operator should add numbers together');
        }
    });
});