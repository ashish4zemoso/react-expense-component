import './ExpenseForm.css'
import InputItem from './InputItem'
import ActionItem from './ActionItem'



const ExpenseForm  = () => {

    const submitHandler = (evtObj) => {
        evtObj.preventDefault();
        const expenseData = {
            title: InputItem.enteredTitle ,
            amount: InputItem.enteredAmount,
            date: new Date(InputItem.enteredDate)
        }

        console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div class='new-expense-controls'>
                <InputItem labelContent='Title' inputType='text'/>
                <InputItem labelContent='Amount' inputType='number' 
                    minValue = '0.01' stepValue = '0.01'/>
                <InputItem labelContent='Date' inputType='date' 
                    minValue='2022-01-01' maxValue = '2022-12-31'/>
                <ActionItem actionType='button' itemContent='Add Expense' 
                    typeAttribute='submit' />
            </div>
        </form>
    )
}

export default ExpenseForm;