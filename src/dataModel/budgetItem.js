import Periods from './periods';

// todo: this class is not in use? do you want it?
class BudgetItem {
	constructor(value, period) {
		this.value = value;
		this.period = period;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (typeof value !== 'number') {
			throw new Error('Budget item values must be numbers');
		}

		this._value = value;
	}

	get period() {
		return this._period;
	}

	set period(period) {
		if (!Object.values(Periods).includes(period)) {
			throw new Error(`The supplied period, ${period}, is not a period enumerator value`);
		}

		this._period = period;
	}
}

export default BudgetItem;
