import React from 'react';
import './NewExpenseContainer.css'
import ExpenseForm from './ExpenseForm'

const InputExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default InputExpense;