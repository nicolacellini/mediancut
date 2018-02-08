/**
(C) Nicola Cellini (2018)
//
//version = "1.02"
//author = "Nicola Cellini"
//compiled = "10 JAN 2018 - 20:30 CET"
**/
/*****/
/*****/
var mediancut = class mediancut {
	constructor (matrix, size = 8) {
		this.matrix = matrix;
		this.space = this.matrix[0].length;
		this.depth = Math.pow(2, new math().nextpow2(size));
		this.median(this.matrix, this.depth, this.tmp = []);
		this.array = [];
		for (var i = 0; i < this.tmp.length; i = i + 1) {
			if (this.tmp[i].length > 0)
				this.array.push(this.tmp[i]);
		}
		return this.array;
	}
	
	
	median (vectors, cuts, groups) {
		
		'use strict';
		
		if (cuts < 2) {
			
			return vectors;
		} else {
		
			var i = 0, j = 0,
				N = cuts / 2,
				box = this.box(vectors),
				idx = 0, side = 0, pivot = 0,
				left = [], right = [];
				
			for (i = 0; i < box.length; i = i + 1) {
				if (side < box[i][0]) {
					side = box[i][0];
					pivot = box[i][1] + box[i][2];
					idx = i;
				}
			}
			
			pivot = pivot / 2;
			
			for (i = 0; i < vectors.length; i = i + 1) {
				if (vectors[i][idx] < pivot) {
					left.push(vectors[i]);
				} else
					right.push(vectors[i]);
			}
			
			if (left.length > 0) {
				left = this.median(left, N, groups);
				groups.push(left);
			}
	
			if (right.length > 0) {
				right = this.median(right, N, groups);
				groups.push(right);
			}
			
			return 0;
		}
	}
	
	
	box (vectors) {
		
		'use strict';
		
		var box = [],
			i = 0, j = 0,
			m = 0, M = 0;
		
		while (j < this.space) {
			m = Infinity;
			M = 0;
			for (i = 0; i < vectors.length; i = i + 1) {
				if (m > vectors[i][j])
					m = vectors[i][j];
				
				if (M < vectors[i][j])
					M = vectors[i][j];
			}
				
			box.push([Math.abs(M - m), M, m]); // [side length, point max, point min]
			j = j + 1;
		}
		
		return box;
	}
};
