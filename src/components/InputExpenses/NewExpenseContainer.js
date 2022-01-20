import React from 'react';
import './NewExpenseContainer.css'
import ExpenseForm from './ExpenseForm'



const InputExpense = (props) => {
    const addExpenseHandler = (expense) => {
        console.log('In NewExpenseContainer')
        console.log(expense)
        props.onUpdateExpense(expense)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpenseHandler}/>
        </div>
    );
}

export default InputExpense;