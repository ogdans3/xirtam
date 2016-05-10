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
            matrices.a = {}
            matrices.b = {}
            matrices.c = {}
            matrices.d = {}

            matrices.a.matrix = new Matrix([[1,2,3],[5,1,2],[5,21,123]]);
            matrices.b.matrix = new Matrix([[2,5,13],[8,2,46],[12,61,123]]);
            matrices.c.matrix = new Matrix([1,2,5]);
            matrices.d.matrix = new Matrix([[3],[5],[7], [123]]);

            matrices.a.arr = [[1,2,3],[5,1,2],[5,21,123]];
            matrices.b.arr = [[2,5,13],[8,2,46],[12,61,123]];
            matrices.c.arr = [1,2,5];
            matrices.d.arr = [[3],[5],[7], [123]];
        },

        afterEach: function (test) {
        },


        /* Matrix math tests */

        add: function(){
            var a_b_add_Expected = new Matrix([[3,7,16], [13,3,48], [17,82,246]]);
            assert.deepEqual(matrices.a.matrix.add(matrices.b.matrix).data, a_b_add_Expected.data, matrices.a.matrix.add(matrices.b.matrix).data);
        },

        subtract: function(){
            var a_b_add_Expected = new Matrix([[-1, -3, -10], [-3, -1, -44], [-7, -40, 0]]);
            assert.deepEqual(matrices.a.matrix.subtract(matrices.b.matrix), a_b_add_Expected);
        },

        scalarMultiply: function(){
            assert.deepEqual(matrices.a.matrix.scalarMultiply(2), new Matrix([[2,4,6],[10,2,4],[10,42,246]]));
            assert.deepEqual(matrices.b.matrix.scalarMultiply(10), new Matrix([[20,50,130],[80,20,460],[120,610,1230]]));
            assert.deepEqual(matrices.c.matrix.scalarMultiply(1), new Matrix([1,2,5]));
            assert.deepEqual(matrices.d.matrix.scalarMultiply(0), new Matrix([[0],[0],[0], [0]]));
        },

        crossProduct: function(){

        },

        multiply: function(){
        },

        /* Matrix data tests */
        getDataPoint: function(){
            assert.equal(matrices.a.matrix.getDataPoint(0,0), 1);
            assert.equal(matrices.a.matrix.getDataPoint(1,0), 5);
            assert.equal(matrices.a.matrix.getDataPoint(2,1), 21);

            assert.equal(matrices.c.matrix.getDataPoint(0,0), 1);
            assert.equal(matrices.c.matrix.getDataPoint(0,1), 2);
            assert.equal(matrices.c.matrix.getDataPoint(0,2), 5);

            assert.equal(matrices.d.matrix.getDataPoint(0,0), 3);
            assert.equal(matrices.d.matrix.getDataPoint(1,0), 5);
            assert.equal(matrices.d.matrix.getDataPoint(3,0), 123);
        },

        getRow: function(){
            assert.deepEqual(matrices.a.matrix.getRow(0), [1,2,3]);
            assert.deepEqual(matrices.b.matrix.getRow(2), [12,61,123]);
            assert.deepEqual(matrices.c.matrix.getRow(0), [1,2,5]);
            assert.deepEqual(matrices.c.matrix.getRow(1), null);
            assert.deepEqual(matrices.d.matrix.getRow(0), [3]);
        },

        get: function(){
            assert.equal(matrices.a.matrix.get(0,0), 1);
            assert.equal(matrices.a.matrix.get(1,0), 5);
            assert.equal(matrices.a.matrix.get(2,1), 21);


            assert.equal(matrices.c.matrix.get(0,0), 1);
            assert.equal(matrices.c.matrix.get(0,1), 2);
            assert.equal(matrices.c.matrix.get(0,2), 5);

            assert.equal(matrices.d.matrix.getDataPoint(0,0), 3);
            assert.equal(matrices.d.matrix.getDataPoint(1,0), 5);
            assert.equal(matrices.d.matrix.getDataPoint(3,0), 123);
        },

        /* Matrix transform tests */
        transpose: function(){
            assert.deepEqual(matrices.a.matrix.transpose(), new Matrix([[1,5,5], [2,1,21], [3,2,123]]));
            assert.deepEqual(matrices.b.matrix.transpose(), new Matrix([[2,8,12], [5,2,61], [13,46,123]]));
            assert.deepEqual(matrices.c.matrix.transpose(), new Matrix([[1], [2], [5]]));
            assert.deepEqual(matrices.d.matrix.transpose(), new Matrix([3, 5, 7, 123]));
        },

        toArray: function(){
            assert.deepEqual(matrices.a.matrix.toArray(), matrices.a.arr);
            assert.deepEqual(matrices.b.matrix.toArray(), matrices.b.arr);
            assert.deepEqual(matrices.c.matrix.toArray(), [matrices.c.arr]);
            assert.deepEqual(matrices.d.matrix.toArray(), matrices.d.arr);
        },


    });
});