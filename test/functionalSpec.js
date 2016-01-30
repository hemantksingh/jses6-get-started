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