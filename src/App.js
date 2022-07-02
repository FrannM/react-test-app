import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

export const DUMMY_EXPENSES = [
	{
		id: 1,
		title: 'Rent',
		amount: 500,
		date: new Date(2022, 5, 1),
	},
	{
		id: 2,
		title: 'Coffee',
		amount: 10,
		date: new Date(2021, 6, 2),
	},
	{
		id: 3,
		title: 'Food',
		amount: 100,
		date: new Date(2021, 7, 3),
	},
	{
		id: 4,
		title: 'Car',
		amount: 1000,
		date: new Date(2022, 8, 4),
	},
	{
		id: 5,
		title: 'Phone',
		amount: 100,
		date: new Date(2022, 9, 5),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
