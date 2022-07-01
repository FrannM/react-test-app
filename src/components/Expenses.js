import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	const { items } = props;
	return (
		<div className="expenses">
			{items.map((expense) => (
				<ExpenseItem key={expense.id} {...expense} />
			))}
		</div>
	);
};

export default Expenses;
