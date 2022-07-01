import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import './Expenses.css';

const Expenses = (props) => {
	const { items } = props;
	return (
		<Card className="expenses">
			{items.map((expense) => (
				<ExpenseItem key={expense.id} {...expense} />
			))}
		</Card>
	);
};

export default Expenses;
