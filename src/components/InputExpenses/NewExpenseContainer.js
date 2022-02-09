import React, {useState} from 'react';
import './NewExpenseContainer.css'
import ExpenseForm from './ExpenseForm'

const InputExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const addExpenseHandler = (EnteredExpense) => {
        console.log('In NewExpenseContainer')
        console.log(EnteredExpense)
        const newExpenseData = {
            ...EnteredExpense,
            id:Math.random().toString
        };
        props.onUpdateExpense(newExpenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
           {!isEditing && 
                <button onClick={startEditingHandler}> 
                    Add New Expense
                </button>
           }
           {isEditing &&
            <ExpenseForm onAddExpense={addExpenseHandler}
             onCancel={stopEditingHandler}/>
           }
        </div>
    );
}

export default InputExpense;