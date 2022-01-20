import './ExpenseForm.css'
import InputItem from './InputItem'
import ActionItem from './ActionItem'
import {useState} from 'react'

const ExpenseForm  = (props) => {

    /* const [inputData,setInputData] = useState( {
        title: '',
        amount: '',
        date : new Date('')
    } ) ; */

    const [enteredInput,setEnteredInput] = useState({
        title: '',
        amount: '',
        date: ''
    }); 

    const submitHandler = (evtObj) => {
        evtObj.preventDefault();
        const expenseData = enteredInput;
        console.log(expenseData); 
        props.onAddExpense(expenseData);
        
        setEnteredInput({
            title: '',
            amount: 0.0,
            date : new Date()
        })
        //console.log(enteredInput); 
    }

 /*    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        setInputData(enteredExpenseData); 
        console.log(enteredExpenseData);
    }
 */
    const titleChangeHandler = (evtObj) => {
        // setEnteredTitle(evtObj.target.value);
        //console.log(evtObj.target.value);
       setEnteredInput( (prevState) => {
           return { ...prevState,
            title: evtObj.target.value
           }
       });
       console.log(enteredInput)
       //onSaveExpenseDataHandler(enteredInput)
       //props.onSaveExpenseData(enteredInput);
    };
    const amountChangeHandler = (evtObj) => {
        // setEnteredAmount(evtObj.target.value);
        console.log(evtObj.target.value);
        setEnteredInput((prevState) => {
            return { ...prevState,
                amount: parseFloat(evtObj.target.value),
               }
        });
        console.log(enteredInput)
        //onSaveExpenseDataHandler(enteredInput)
        //props.onSaveExpenseData(enteredInput);
    };
    const dateChangeHandler = (evtObj) => {
        // setEnteredDate(evtObj.target.value);
        console.log(evtObj.target.value);
        setEnteredInput((prevState) => {
            return { ...prevState,
                date: new Date(evtObj.target.value),
               }
        });
        console.log(enteredInput)
        //onSaveExpenseDataHandler(enteredInput)
        //props.onSaveExpenseData(enteredInput);
    };
    
    //console.log('hiiii')
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <InputItem labelContent='Title' inputType='text'
                    currValue={enteredInput.title}
                    onChangeHandler={titleChangeHandler} />
                <InputItem labelContent='Amount' inputType='number' 
                    minValue = '0.01' stepValue = '0.01'
                    currValue={enteredInput.amount}
                   onChangeHandler={amountChangeHandler}
                />
                <InputItem labelContent='Date' inputType='date' 
                    minValue='2022-01-01' maxValue = '2022-12-31'
                    currValue={enteredInput.date}
                    onChangeHandler={dateChangeHandler} 
                />
                <ActionItem actionType='button' itemContent='Add Expense' 
                    typeAttribute='submit' 
                />
            </div>
        </form>
    )
}

export default ExpenseForm;