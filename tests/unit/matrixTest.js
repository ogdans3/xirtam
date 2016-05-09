define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var Matrix = require("intern/dojo/node!path");
    var Matrix = require("intern/dojo/node!./../../src/index.js");

    var matrices = {        
        a: null,
        b: null,
        c: null,
        d: null
    }
    registerSuite({
        name: 'matrixTest',

        setup: function () {
        },

        teardown: function () {
        },

        beforeEach: function (test) {
            matrices.a = new Matrix([[1,2,3],[5,1,2],[5,21,123]]);
            matrices.b = new Matrix([[2,5,13],[8,2,46],[12,61,123]]);
            matrices.c = new Matrix([1,2,5]);
            matrices.d = new Matrix([[3],[5],[7], [123]]);
        },

        afterEach: function (test) {
        },


        /* Matrix math tests */

        add: function(){
            var a_b_add_Expected = new Matrix([[3,7,16], [13,3,48], [17,82,246]]);
            assert.deepEqual(matrices.a.add(matrices.b).data, a_b_add_Expected.data, matrices.a.add(matrices.b).data);
        },

        subtract: function(){
            var a_b_add_Expected = new Matrix([[-1, -3, -10], [-3, -1, -44], [-7, -40, 0]]);
            assert.deepEqual(matrices.a.subtract(matrices.b), a_b_add_Expected);
        },

        /* Matrix data tests */
        getDataPoint: function(){
            assert.equal(matrices.a.getDataPoint(0,0), 1);
            assert.equal(matrices.a.getDataPoint(1,0), 5);
            assert.equal(matrices.a.getDataPoint(2,1), 21);


            assert.equal(matrices.c.getDataPoint(0,0), 1);
            assert.equal(matrices.c.getDataPoint(0,1), 2);
            assert.equal(matrices.c.getDataPoint(0,2), 5);

            assert.equal(matrices.d.getDataPoint(0,0), 3);
            assert.equal(matrices.d.getDataPoint(1,0), 5);
            assert.equal(matrices.d.getDataPoint(3,0), 123);
        },

        getRow: function(){
        },

        get: function(){
            assert.equal(matrices.a.get(0,0), 1);
            assert.equal(matrices.a.get(1,0), 5);
            assert.equal(matrices.a.get(2,1), 21);


            assert.equal(matrices.c.get(0,0), 1);
            assert.equal(matrices.c.get(0,1), 2);
            assert.equal(matrices.c.get(0,2), 5);

            assert.equal(matrices.d.getDataPoint(0,0), 3);
            assert.equal(matrices.d.getDataPoint(1,0), 5);
            assert.equal(matrices.d.getDataPoint(3,0), 123);
        },

        /* Matrix transform tests */
        transpose: function(){
            assert.deepEqual(matrices.a.transpose(), new Matrix([[1,5,5], [2,1,21], [3,2,123]]));
            assert.deepEqual(matrices.b.transpose(), new Matrix([[2,8,12], [5,2,61], [13,46,123]]));
            assert.deepEqual(matrices.c.transpose(), new Matrix([[1], [2], [5]]));
            assert.deepEqual(matrices.d.transpose(), new Matrix([3, 5, 7, 123]));
        }




    });
});