import { expect } from 'chai';

describe('Array indexes', () => {
	let array = [1,2,3];

	describe('#indexOf()', () => {

		it('returns -1 when the value is not present', () => {
			expect(array.indexOf(5)).to.eq(-1);
			expect(array.indexOf(0)).to.eq(-1);
		});

		it('returns 0 when index of first value is queried', () => {
			expect(array.indexOf(1)).to.eq(0);
		});
	});
});


describe('Destructuring', () => {
	
	describe('an array with 3 values', () => {
		let [,x,y,z] = [3,1,2]

		it('assigns the array values', () => {
			expect(x).to.eq(1);
			expect(y).to.eq(2);
			expect(z).to.be.undefined;
		});
	});

	describe('an array with 2 values', () => {
		let x = 1;
		let y = 2;
		[x,y] = [y,x];

		it('reverses the values', () => {
			expect(x).to.eq(2);
			expect(y).to.eq(1);
		});
	});

	describe('an object', ()=>{
		let {x, y} = {x: 1, y: 2};

		it('assigns the values', () => {
			expect(x).to.eq(1);
			expect(y).to.eq(2);
		});
	});
});