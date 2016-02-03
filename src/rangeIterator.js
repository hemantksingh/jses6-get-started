class RangeIterator {

	constructor(start, end) {
		this.current = start;
		this.end = end;
	}

	next () {
		let result = {value: undefined, done: true};
		if(this.current <= this.end){
			result = {value: this.current, done: false}; 
			this.current += 1;
		}

		return result;
	}
}

export default RangeIterator;