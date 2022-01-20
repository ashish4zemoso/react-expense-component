import './ExpenseForm.css'
import InputItem from './InputItem'
import ActionItem from './ActionItem'
import {useState} from 'react'

const ExpenseForm  = () => {

    const [inputData,setInputData] = useState( {
        title: '',
        amount: '',
        date : new Date('')
    } ) ;
    const submitHandler = (evtObj) => {
        evtObj.preventDefault();
        const expenseData = inputData;
        console.log(expenseData); 
        
        setInputData({
            title: '',
            amount: '',
            date : new Date('')
        })
    }

    const onSavExpenseDataHandler = (enteredExpenseData) => {
        setInputData(enteredExpenseData); 
        console.log(enteredExpenseData);
    }
    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <InputItem labelContent='Title' inputType='text'
                    onSaveExpenseData={onSavExpenseDataHandler} />
                <InputItem labelContent='Amount' inputType='number' 
                    minValue = '0.01' stepValue = '0.01'
                    onSaveExpenseData={onSavExpenseDataHandler}
                />
                <InputItem labelContent='Date' inputType='date' 
                    minValue='2022-01-01' maxValue = '2022-12-31'
                    onSaveExpenseData={onSavExpenseDataHandler}
                />
                <ActionItem actionType='button' itemContent='Add Expense' 
                    typeAttribute='submit' 
                    onSaveExpenseData={onSavExpenseDataHandler}
                />
            </div>
        </form>
    )
}

export default ExpenseForm;