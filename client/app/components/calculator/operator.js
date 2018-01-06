class Operator {
	constructor() {
		this.priority = 1
	}

	calc(one, two) {
		if (!this.validate(one, two))
			throw new Error(`One ${one}, Two $(two)`)

		return 0
	}

	validate(one, two) {
		if (one instanceof Operator || two instanceof Operator)
			return false

		return true
	}
}

export default Operator