'use strict';

import { expect } from 'chai';

describe('A map', ()=> {
    let map = new Map([
        ['name', 'RajniKanth'],
        ['age', 65],
        ['height', '170']]);

    it('supports \'for each\'', ()=> {
        let array = [];
        map.forEach((value, key) => {
            array.push('key: ' + key + ', value: ' + value);
        });

        expect(array.length).to.eq(3);
        expect(array[0]).to.eq('key: name, value: RajniKanth');
    });

    it('supports \'for of\' iteration', ()=> {
        let array = [];
        for (let [key, value] of map.entries()) {
            array.push('key: ' + key + ', value: ' + value);
        }

        expect(array.length).to.eq(3);
        expect(array[0]).to.eq('key: name, value: RajniKanth');
    });

    it('can be constructed from another iterator (map)', ()=> {
        let map2 = new Map(map.entries());

        expect(map2.size).to.eq(3);
    });
});