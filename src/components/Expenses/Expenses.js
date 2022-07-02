import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const { items } = props;
	const [filteredYear, setFilteredYear] = useState('2022');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
				{items.map((expense) => (
					<ExpenseItem key={expense.id} {...expense} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
