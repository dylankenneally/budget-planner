// Data provider

import BudgetItem from './budgetItem';
import Periods from './periods';
import store from './dataStore';

class DataProvider {
	constructor() {
		let pay = new BudgetItem(123.45, Periods.monthly);

		store.set('pay', pay);
	}
}

const dp = new DataProvider();
export default dp;
