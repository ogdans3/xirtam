# Xirtam

## Installation

```npm install xirtam```

## Usage
Most of the methods in Xirtam returns a new matrix object and allows for methods to be stacked after one another.

```javascript
var Matrix = require("xirtam");

var m1 = new Matrix([[1, 2, 3], [3, 4, 5], [8, 1, 2]]);
var m2 = new Matrix([[23, 52, 1], [45, 6, 5], [3, 1, 7]]);

var result = m1
		.add(m2)
		.scalarMultiply(3)
		.multiply(m1);

result.prettyPrint();

```
Outputs
```
654, 804, 1050
474, 438, 642
267, 117, 183

```

## API

### Constructor

#### new Matrix()
Creates a new Matrix instance, accepts a multidimensional array:

```javascript
var myFirstMatrix = new Matrix([[1,0],[0,1]]);
var mySecondMatrix = new Matrix([[1,2],[3,4]]);
```

### Properties

#### matrix.rows
The rows property contains the number of rows for the respective matrix instance

```javascript
var rows = myFirstMatrix.rows;
```
```javascript
> console.log(myFirstMatrix.rows);
2
```


#### matrix.cols or matrix.columns
The cols property contains the number of columns for the respective matrix instance, columns is an alias for this property.

```javascript
var cols = myFirstMatrix.cols;
var cols = myFirstMatrix.columns;
```
```javascript
> console.log(myFirstMatrix.cols);
2
```

#### matrix.data
The data property contains the actual data of the matrix instance, i.e: the double array of the values in the matrix.

```javascript
var data = myFirstMatrix.data;
```

```javascript
> console.log(myFirstMatrix.data);
[[1,0],[0,1]]
```

### Methods
The following methods will return a new matrix object.

#### matrix1.add(matrix2)
Creates a new matrix by adding each respective term in the matrices.
Each of the matrices must be of the same dimensions, i.e: the same number of rows and columns. If these are different an error will be thrown.

```javascript
var result = myFirstMatrix.add(mySecondMatrix);
result.prettyPrint();
```

```
 2, 2
 3, 5
```

#### matrix1.subtract(matrix2)
Creates a new matrix by subtracting each respective term in the matrices.
Each of the matrices must be of the same dimensions, i.e: the same number of rows and columns. If these are different an error will be thrown.

```javascript
var result = myFirstMatrix.subtract(mySecondMatrix);
result.prettyPrint();
```

```
 0, -2
 -3, -3
```

#### matrix1.elementWiseMultiplication(matrix2)
Creates a new matrix by multiplying each respective term in the matrices.
Each of the matrices must be of the same dimensions, i.e: the same number of rows and columns. If these are different an error will be thrown.

```javascript
var result = myFirstMatrix.elementWiseMultiplication(mySecondMatrix);
result.prettyPrint();
```

```
 1, 0
 0, 4
```

#### matrix1.multiply(matrix2, flip)
Creates a new matrix by doing matrix multiplication between the two given matrices.
The dimensions of the given matrices must either be same, or the columns of the first matrix must be equal to the rows of the second matrix. 
Will return a new matrix with rows equal to the number of rows of the first matrix and the number of columns equal to the number of columns of the second matrix.

```javascript
var result = myFirstMatrix.elementWiseMultiplication(mySecondMatrix);
result.prettyPrint();
```

```
 1, 2
 3, 4
```

If the the second argument, flip, is set to true then the matrices will be flipped.
```javascript
var result = myFirstMatrix.elementWiseMultiplication(mySecondMatrix, true);
result.prettyPrint();
```

```
 1, 2
 3, 4
```

#### matrix1.scalarMultiply(scalar)
Creates a new matrix where each element of the matrix1 is scaled by the given scalar.
```javascript
var result = myFirstMatrix.scalarMultiply(2);
result.nicePrint();
```

```
 2, 0
 2, 2
```

#### matrix1.transpose()
Creates a new matrix that is the transpose of matrix1

```javascript
var result = mySecondMatrix.transpose();
result.nicePrint();
```

```
 1, 3
 2, 4
```

### Data manipulation methods

#### matrix1.each(function(element, row, column))
Will run through each element of matrix1 and call a function on each of the elements, the returned value from this function will replace the element at that row and column position.

```javascript
var result = myFirstMatrix.each(function(){
	return 2
});
result.nicePrint();
```

```
 2, 2
 2, 2
```


### Data getters/setters methods

#### matrix1.setDataPoint(row, column, data)
Sets the element found at row, column to the given data.

```javascript
var result = myFirstMatrix.setDataPoint(0, 0, 2);
result.nicePrint();
```

```
 2, 0
 0, 1
```

#### matrix1.getRow(row)
Returns a row of matrix1.
```javascript
console.log(myFirstMatrix.getRow(0));
```

```
[1, 0]
```

#### matrix1.getDataPoint(row, column) or matrix1.get(row, column)
Returns a data element found at row, column in matrix1.
get is an alias for getDataPoint.

```javascript
console.log(myFirstMatrix.get(0, 0));
```

```
1
```

### Miscellaneous methods

#### matrix1.copy() or matrix1.clone()
Returns a copy of the matrix
```javascript
var result = myFirstMatrix.clone();
result.nicePrint();
```

```
 1, 0
 0, 1
```

#### matrix1.foreach(function(element))
This method will call the given function with each of the elements in the matrix
```javascript
var sum = 0;
var result = myFirstMatrix.foreach(function(){
	sum ++;
});
console.log(sum)
```

```
4
```

#### matrix1.prettyPrint() or matrix1.nicePrint()
This function will print the matrix data out in matrix format
```javascript
myFirstMatrix.prettyPrint()
```

```
 1, 0
 0, 1
```

#### matrix1.equals(matrix2)
This method compares matrix1 to a given matrix, matrix2, and returns true if they are equal.
Checks the data within the matrices.

```javascript
var result = myFirstMatrix.equals(mySecondMatrix);
console.log(result)

var result = myFirstMatrix.equals(myFirstMatrix);
console.log(result)
```

```
false
true
```



