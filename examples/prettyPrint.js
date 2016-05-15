var Matrix = require("../index.js");

var m1 = new Matrix([[1, 2, 3], [3, 4, 5], [8, 1, 2]]);
var m2 = new Matrix([[23, 52, 1], [45, 6, 5], [3, 1, 7]]);

var result = m1
				.add(m2)
				.scalarMultiply(3)
				.multiply(m1);

result.nicePrint();
