var Matrix = function(arr){
	if(arr[0].constructor === Array){
		this.rows = arr.length;
		this.cols = arr[0].length;
	}else{
		this.rows = 1;
		this.cols = arr.length;
		arr = [arr];
	}
	this.columns = this.cols;
	this.data = arr;
}

Matrix.prototype = {
	data: null,
	rows: null,
	cols: null,
	colums: null,

	setDataPoint: function(row, column, data){
		this.data[row][column] = data;
		return this;
	},
	getRow: function(row){
		if(row >= this.rows)
			return null
		return this.data[row];
	},
	get: function(row, column){
		return this.getDataPoint(row, column);
	},
	
	getDataPoint: function(row, column){
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
			}
		}
		var output = new Matrix(arr);
		return output;
	},

	toArray: function(){
		return this.data;
	},

	add: function(mat2){
		var mat1 = this;
		var arr = [];
		if(mat1.rows !== mat2.rows || mat1.cols !== mat2.cols){
			throw new Error("Incompatible matrices");
		}
		for(var i = 0; i < mat1.rows; i++){
			arr.push(new Array(mat1.cols));
			for(var q = 0; q < mat1.cols; q++){
				arr[i][q] = mat1.getDataPoint(i, q) + mat2.getDataPoint(i, q);
			}
		}
		
		var output = new Matrix(arr);
		return output;
	},

	elementWiseMultiplication: function(mat2){
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
		var arr = [];
		for(var i = 0; i < mat1.rows; i++){
			arr.push(new Array(mat1.cols));
			for(var q = 0; q < mat1.cols; q++){
				arr[i][q] = mat1.getDataPoint(i, q) * factor;
			}
		}
		var output = new Matrix(arr);
		return output;
	},

	equals: function(mat2){
		var mat = this;
		if(mat.data.length !== mat2.data.length || mat.data[0].length !== mat2.data[0].length)
			return false;
		for(var i = 0; i < mat2.data.length; i++){
				for(var q = 0; q < mat2.data[0].length; q++){
					if(mat2.data[i][q] !== mat.data[i][q]){
						return false;
					}
			}
		}
		return true;
	},

	transpose: function(){
		var a = JSON.parse(JSON.stringify(this.data));
		a = Object.keys(a[0]).map(
	        function (c) { return a.map(function (r) { return r[c]; }); }
        );
		var output = new Matrix(a);
		return output;
	},

	clone: function(){
		return this.copy();
	},
	
	copy: function(){
		return new Matrix(JSON.parse(JSON.stringify(this.data)));
	},

	each: function(func){
		var self = this.copy();
		for(var i = 0; i < self.rows; i++){
			for(var q = 0; q < self.cols; q++){
				self.data[i][q] = func(self.data[i][q], i, q);
			}
		}
		return self;
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
//			console.log(mat1.rows, mat1.cols, "::::", mat2.rows, mat2.cols)
			throw new Error("Non compatible matrices");
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
				}
				output[i][x] = (sum);
			}
		}
		var outputMatrix = new Matrix(output);
		return outputMatrix;
	},

	nicePrint: function(){
		this.prettyPrint();
	},

	prettyPrint: function(){
		var arr = [];
		this.data.forEach(function(element, index){
			var tmpArr = [];
			element.forEach(function(element2, index2){			
				tmpArr[index2] = " " + element2;
			});
			arr[index] = tmpArr;
		})
		console.log(arr.join("\n"), "\n")
	}
}

module.exports = Matrix;
