'use strict';

import { expect } from 'chai';
import ArrayIterator from '../src/ArrayIterator';

class Company {
	constructor() {
		this.employees = [];
	}

	addEmployees(...names) {
		this.employees = this.employees.concat(names);
	}

	[Symbol.iterator]() {
		return new ArrayIterator(this.employees);
	}
}

describe('An iterable', () => {
	
	it('can be built by using Symbol.iterator', () => {
		let count = 0;
		let company = new Company();
		company.addEmployees('Haka', 'Dak', 'James', 'Dave');

		for(let employee of company) {
			/*jshint unused: false */
			count +=1;
		}

		expect(count).to.eq(4);
	});
});


