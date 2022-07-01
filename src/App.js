import Expenses from './components/Expenses';

function App() {
	const expenses = [
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

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
