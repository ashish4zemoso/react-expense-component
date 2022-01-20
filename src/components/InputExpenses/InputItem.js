import './InputItem.css'
import {useState} from 'react';

const InputItem = (props) => {
   
    /* const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState(''); */

    const [enteredInput,setEnteredInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); 

 /*    let newTitle = enteredInput.enteredTitle;
    let newAmount = enteredInput.enteredAmount;
    let newDate = enteredInput.enteredDate; */

    /* const newExpense = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }

    console.log(newExpense); */

    const titleChangeHandler = (evtObj) => {
        // setEnteredTitle(evtObj.target.value);
        //console.log(evtObj.target.value);
       setEnteredInput( (prevState) => {
           return { ...prevState,
            enteredTitle: evtObj.target.value
           }
       });
       props.onSaveExpenseData(enteredInput);
    };
    const amountChangeHandler = (evtObj) => {
        // setEnteredAmount(evtObj.target.value);
        console.log(evtObj.target.value);
        setEnteredInput((prevState) => {
            return { ...prevState,
                enteredAmount: evtObj.target.value,
               }
        });
        props.onSaveExpenseData(enteredInput);
    };
    const dateChangeHandler = (evtObj) => {
        // setEnteredDate(evtObj.target.value);
        console.log(evtObj.target.value);
        setEnteredInput((prevState) => {
            return { ...prevState,
                enteredDate: evtObj.target.value,
               }
        });
        props.onSaveExpenseData(enteredInput);
    };

    /* const Data = {
        title:enteredTitle ,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }  */
    // console.log(Data);

    switch(props.inputType) {
        case 'text' : 
            return (
                <div className='input-group'>
                    <label>{props.labelContent}</label>
                    <input type={props.inputType}
                    onChange={titleChangeHandler}/> 
                </div>
            ); 
             
        case 'number' : 
            return  (
                <div className='input-group'>
                    <label >{props.labelContent}</label>
                    <input type={props.inputType} 
                       min={props.minValue} 
                       step={props.stepValue}
                       onChange={amountChangeHandler}
                       /> 
                </div>
            )
        case 'date':
            return (
                <div className='input-group'>
                    <label>{props.labelContent}</label>
                    <input type={props.inputType} 
                    min={props.minValue} 
                    max={props.maxValue}
                    onChange={dateChangeHandler}
                    />  
                </div>
            )
               
        default: return  <div> </div>;
    }
    
}

export default InputItem;

/*export enteredDate;
export enteredAmount; */