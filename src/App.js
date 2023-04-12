//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import ExpenseItem from './Component/Expenses/ExpenseItem/ExpenseItem'; // ExpenseItem is a component which is holded by ExpenseItem.jsx
import Expenses from './Component/Expenses/Expenses';
import NewExpense from './Component/New_expense/NewExpense';
import Counter from './Counter';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const onAddExpense = (newValue) => {
    setExpenses((prev)=>[newValue, ...prev]);
  }
  return (
    // <Counter/>
    <div className='App'>
      <NewExpense onAddExpense={onAddExpense}/>
      {<Expenses expenses = {expenses}/>}
      
    </div>
  );
}

export default App;
