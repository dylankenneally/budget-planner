import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const BudgetEntry = ({ title }) => {
	const [amount, setAmount] = React.useState(0);

	return (
		<>
			<p>{title}</p>
			{/* todo: interger only, no -ve, etc, uncontrolled (click up when empty to see error) */}
			{/* Only allows positive integers */}
			<TextField
				value={amount}
				onChange={event => {
					let { value } = event.target;
					value = parseInt(value.toString(), 10);
					if (value !== undefined && !isNaN(value))  {
						setAmount(value);
					}

					return null;
				}}
				type="number"
				inputProps={{ min: 0, step: 1 }}
			/>

			{/* presume the input is weekly, display monthly */}
			{ Math.round((amount * 52) / 12) }
			<br />

		</>
	);
};

BudgetEntry.propTypes = {
	title: PropTypes.string.isRequired,
};

export default BudgetEntry;
