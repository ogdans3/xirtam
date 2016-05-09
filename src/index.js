var Matrix = function(arr){
//	this.rows = rows;
//	this.cols = columns;
//	this.colums = this.cols;
	
	if(arr.length == 1)
		arr = arr[0]
	if(arr[0].constructor === Array){
		this.rows = arr.length;
		this.cols = arr[0].length;
	}else{
		this.rows = 1;
		this.cols = arr.length;
	}
	this.columns = this.cols;
	this.data = arr;

/*	var matrix = [];
	for(var i=0; i<rows; i++) {
	    matrix[i] = new Array(columns);
	}
	this.data = matrix;*/
}

Matrix.prototype = {
	data: null,
	rows: null,
	cols: null,
	colums: null,

	setData: function(arr){
		if(!(arr.length === this.cols && arr[0].length === undefined) && (arr.length !== this.rows || ((!arr[0].length && this.cols === 1) && arr[0].length !== this.cols))){
			throw new Error("Wrong dimensions on the data \n Expected: " + this.rows + ":" + this.cols + "\n" + "Actual: " + arr.length + ":" + arr[0].length);
		}
		if(arr[0].constructor === Array){		
			this.data = arr;
		}else
			this.data = [arr];
	},

	setDataPoint: function(row, column, data){
		this.data[row][column] = data;
	},
	getRow: function(row){
		return this.data[row];
	},
	get: function(row, column){
		return this.getDataPoint(row, column);
	},
	
	getDataPoint: function(row, column){
		if(this.rows == 1 && this.data[0].constructor !== Array){
			if(row > 1)
				throw new Error("Rows out of bounds");
			return this.data[column]
		}
		return this.data[row][column]
	},

	subtract: function(mat2){
		var mat1 = this;
		var arr = [];
		if(mat2.rows !== mat1.rows || mat2.cols !== mat1.cols)
			throw new Error("Incompatible matrices");
		for(var i = 0; i < mat1.rows; i++){
			arr.push(new Array(mat1.cols));
			for(var q = 0; q < mat1.cols; q++){
				arr[i][q] = mat1.getDataPoint(i, q) - mat2.getDataPoint(i, q);
//				output.setDataPoint(i, q, mat1.getDataPoint(i, q) - mat2.getDataPoint(i, q));
			}
		}
//		var output = new Matrix(mat1.rows, mat1.cols);
		var output = new Matrix(arr);
		return output;
	},

	toArray: function(){
		return this.data;
	},

	add: function(mat2){
		var mat1 = this;
		var arr = [];
		for(var i = 0; i < mat1.rows; i++){
			arr.push(new Array(mat1.cols));
			for(var q = 0; q < mat1.cols; q++){
				arr[i][q] = mat1.getDataPoint(i, q) + mat2.getDataPoint(i, q);
			}
		}
		
		var output = new Matrix(arr);
		return output;
	},

	//VERY VERY WRONG NAME!
	//TODO
	crossProduct: function(mat2){
		var mat1 = this;
		var arr = [];
		for(var i = 0; i < mat1.rows; i++){
			arr.push(new Array(mat1.cols));
			for(var q = 0; q < mat1.cols; q++){
				arr[i][q] = mat1.getDataPoint(i, q) * mat2.getDataPoint(i, q);
			}
		}
		var output = new Matrix(arr);
		return output;
	},

	scalarMultiply: function(factor){
		var mat1 = this;
		var output = new Matrix(mat1.rows, mat1.cols);
		for(var i = 0; i < mat1.rows; i++){
			for(var q = 0; q < mat1.cols; q++){
				output.setDataPoint(i, q, mat1.getDataPoint(i, q) * factor);
			}
		}
		return output;
	},

	equals: function(arr){
		var mat = this;
		if(mat.data.length !== arr.data.length || mat.data[0].length !== arr.data[0].length)
			return false;
		for(var i = 0; i < arr.data.length; i++){
			if(arr.data[i].length == 1){	
				if(arr.data[i].constructor === Array){
					if(arr.data[i][0] !== mat.data[i][0])
						return false;
				}else if(arr.data[i] !== mat.data[i])
					return false;
			}else{
				for(var q = 0; q < arr.data[0].length; q++){
					if(arr.data[i][q] !== mat.data[i][q]){
						return false;
					}
				}
			}
		}
		return true;
	},

	transpose: function(){
		var a = JSON.parse(JSON.stringify(this.data));
		if(a[0].constructor !== Array)
			a = [a];
		a = Object.keys(a[0]).map(
	        function (c) { return a.map(function (r) { return r[c]; }); }
        );
		var output = new Matrix(a);
		return output;
	},

	each: function(func){
		for(var i = 0; i < this.rows; i++){
			for(var q = 0; q < this.cols; q++){
				this.data[i][q] = func(this.data[i][q], i, q);
			}
		}
		return this;
	},

	foreach: function(func){
		for(var i = 0; i < this.rows; i++){
			for(var q = 0; q < this.cols; q++){
				func(this.data[i][q]);
			}
		}
		return this;
	},

	multiply: function(mat2, flip){
		var mat1 = this;
		if(flip){
			mat1 = mat2;
			mat2 = this;
		}
		if(mat1.cols !== mat2.rows){
			console.log(mat1.rows, mat1.cols, "::::", mat2.rows, mat2.cols)
			throw new Error("Non compatible matrixes");
		}
		var output = Array.apply(null, Array(mat1.rows)).map(function(){return new Array(mat2.cols)});
		for(var x = 0; x < mat2.cols; x++){
			for(var i = 0; i < mat1.rows; i++){
				var sum = 0;
				var row = mat1.data[i];
				if(row.constructor === Array){				
					for(var y = 0; y < mat2.rows; y++){
						sum += row[y]*mat2.data[y][x];
					}
				}else{
					sum += row*mat2.data[0][x];
				}
				output[i][x] = (sum);
			}
		}
		var outputMatrix = new Matrix(output);
		return outputMatrix;
	},

	nicePrint: function(){
		console.log(this.data.join("\n"), "\n")
	}
}

module.exports = Matrix;
