import './ExpenseForm.css'
import InputItem from './InputItem'
import ActionItem from './ActionItem'
import {useState} from 'react'

const ExpenseForm  = (props) => {

    const [enteredInput,setEnteredInput] = useState({
        title: '',
        amount: 0.0,
        date: new Date()
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

    const titleChangeHandler = (evtObj) => {
       setEnteredInput( (prevState) => {
           return { ...prevState,
            title: evtObj.target.value
           }
       });
       console.log(enteredInput)
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
    };
    const dateChangeHandler = (evtObj) => {
        // setEnteredDate(evtObj.target.value);
        console.log(`entered date was: ${evtObj.target.value}`);
        setEnteredInput((prevState) => {
            return { ...prevState,
                date: evtObj.target.value,
               }
        });
        console.log(enteredInput)
    };
 
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
                    minValue='2019-01-01' maxValue = '2022-12-31'
                    currValue={enteredInput.date}
                    onChangeHandler={dateChangeHandler} 
                />
                <ActionItem actionType='button' itemContent='Add Expense' 
                    typeAttribute='submit' onCancel={props.onCancel}
                />
            </div>
        </form>
    )
}

export default ExpenseForm;

/*    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        setInputData(enteredExpenseData); 
        console.log(enteredExpenseData);
    }
 */