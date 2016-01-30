import assert from 'assert';

describe('Array indexes', () => {
  describe('#indexOf()', () => {
    
    it('returns -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('returns 0 when index of first value is queried', () => {
      assert.equal(0, [1,2,3].indexOf(1));
    });

  });
});