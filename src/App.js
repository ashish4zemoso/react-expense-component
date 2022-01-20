
import Expenses from './components/Expenses/Expenses';
import NewExpenseContainer from './components/InputExpenses/NewExpenseContainer'
import './App.css'
import {useState} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Ream of White Paper',
    amount: 125.00,
    date: new Date(2022, 0, 18),
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
    date: new Date(2022, 5, 12),
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