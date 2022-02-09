import React, { useState } from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart'

function Expenses (props){

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( (expenseObj) =>{
    const year = new Date(expenseObj.date).getFullYear()
    return year.toString() === filteredYear; 
  });

    return (
      <Card className="expenses">
         <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    );
}

export default Expenses;

/*   <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date} />
     
       <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date} />
   
       <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date} />
    
       <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date} /> */