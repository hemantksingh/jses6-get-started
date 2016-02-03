class ArrayIterator {
	constructor(array) {
		this.array =array;
		this.index = 0;
	}

	next() {
		let result = {value: undefined, done: true};
		if(this.index < this.array.length) {
			result.value = this.array[this.index];
			result.done = false;
			this.index += 1;
		}

		return result;
	}
}

export default ArrayIterator;