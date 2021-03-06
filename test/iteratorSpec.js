'use strict';

import { expect } from 'chai';
import './runtime.js';
import ArrayIterator from '../src/arrayIterator.js';
import RangeIterator from '../src/rangeIterator.js';


describe('An iterable', () => {

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

	it('can be filtered using generator function', () => {
		let count = 0;
		let company = new Company();
		company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

		let filter = function* (items, predicate) {
			for (let item of items) {
				if(predicate(item)) {
					yield item;
				}
			}
		};

		let take = function* (items, number) {
			let count = 0;
			//if(number < 1) return;

			for(let item of items) {
				count += 1;
				yield item;
				if(count >= number) return;
			}
		};

		for (let employee of take(filter(company, item => item[0] === 'T'), 1)) {
			/*jshint unused: false */
			count +=1;
		}

		expect(count).to.eq(1);
	});

	it('can be built by using Symbol.iterator generator function', () => {
		class CompanyWithGenerator {

			constructor() {
				this.employees = [];
			}

			addEmployees(...names) {
				this.employees = this.employees.concat(names);
			}

			*[Symbol.iterator]() {
				for (let employee of this.employees) {
					yield employee;
				}
			}
		}		

		let count = 0;
		let company = new CompanyWithGenerator();
		company.addEmployees('Haka', 'Dak', 'James', 'Dave');

		for(let employee of company) {
			/*jshint unused: false */
			count +=1;
		}

		expect(count).to.eq(4);
	});
});

describe('A generator with a \'generator function\'', () => {

	it('yields multiple values', () => {

		//A generator function can pick up from where it left
		let numbers = function*(start, end) {
			for (var i = start; i <= end; i++) {
				yield i;
			}
		};

		let sum = 0;
		for (let n of numbers(1, 5)){
			sum += n;
		}

		expect(sum).to.eq(15);
	});
});

describe('A generator with an iterator implementation', () => {

	class Range {

		constructor(start, end) {
			this.start = start;
			this.end = end;
		}

		[Symbol.iterator]() {
			return new RangeIterator(this.start, this.end);
		}
	}

	it('yields multiple values', () => {

		let sum = 0;
		/* Picking up from where we left is achieved by holding the current state
		 as defined in the Iterator implementation. */
		for (let n of new Range(1, 5)) {
			sum += n;
		}

		expect(sum).to.eq(15);
	});
});
