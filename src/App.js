
import Expenses from './components/Expenses/Expenses';
import NewExpenseContainer from './components/InputExpenses/NewExpenseContainer'
import './App.css'
import {useState} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Reams of White Paper',
    amount: 4125.00,
    date: new Date(2022, 1, 18),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 9799.49, 
    date: new Date(2022, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2984.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Wooden Desk',
    amount: 4500,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Car Wipers',
    amount: 4500,
    date: new Date(2021, 4, 12),
  },
  {
    id: 'e6',
    title: 'New Bowl Set',
    amount: 2300,
    date: new Date(2020, 3, 12),
  },
  {
    id: 'e7',
    title: 'Health Coverage',
    amount: 1960.99,
    date: new Date(2020, 6, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(dummyExpenses);

  const updateExpenseHandler = (incomingData) => {
        console.log('In App.js')
        console.log(incomingData)

        /* dummyExpenses.push(incomingData);
        console.log(dummyExpenses) */

        setExpenses((prevExpenses)=>{
          return [incomingData,...prevExpenses];
        });
  };

  return (
    <div>
      <h2 className="welcome-header">List of My Annual Expenses</h2>
      <NewExpenseContainer onUpdateExpense = {updateExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;