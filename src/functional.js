class Functional {

	constructor(name) {
		this.name = name;
	}

	lexicalBinding() {
		return () => {
			return this.name;
		};
	}
}

export default Functional;