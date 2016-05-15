var Matrix = require("../index.js");

var myFirstMatrix = new Matrix([[1,0],[0,1]]);
var mySecondMatrix = new Matrix([[1,2],[3,4]]);

var result = myFirstMatrix.scalarMultiply(2);
result.nicePrint();
