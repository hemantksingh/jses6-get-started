import { expect } from 'chai';
import Functional from '../src/functional';

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


describe('Rest parameters', () => {
	let sum = (type, ...numbers) => {
		let total = 0;
		numbers.forEach((n) => total += n);
		return total;
	};
	
	describe('with 3 integer values', () => {

		let result = sum('array', 1, 2, 3);

		it('evaluates the 3 values', () => {
			expect(result).to.eq(6);
		});
	});

	describe('with integer and string values', () => {

		let result = sum('array', 1, 2, '3');

		it('evaluates the combination of integer and string values', () => {
			expect(result).to.eq('33');
		});
	});	

	describe('with no values', () => {

		let result = sum('array');

		it('does not evaluate', () => {
			expect(result).to.eq(0);
		});
	});
});

describe('Template literals', () => {
	
	describe('with strings', () => {	
		let name = "A name";
		let result = `Hello, ${name}`;

		it('assigns variable value to a string', () => {
			expect(result).to.eq("Hello, A name");
		});
	});

	describe('with expression', () => {
		let x = 1;
		let y = 2;
		let result = `${x} + ${y} is ${x+y}`;

		it('evaluates the expression', () => {
			expect(result).to.eq('1 + 2 is 3');
		});
	});
});

describe('Lexical binding', () => {
	
	let f = new Functional('A name');

	it("'this' has the same value in an arrow function", () => {
		let result = f.lexicalBinding()();
		expect(result).to.eq('A name');
	});
});

