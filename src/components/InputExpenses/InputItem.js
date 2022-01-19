import './InputItem.css'
import {useState} from 'react';

const InputItem = (props) => {
   
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    /* const [enteredInput,setEnteredInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    const titleChangeHandler = (evtObj) => {
        setEnteredTitle(evtObj.target.value);
       /* setEnteredInput( (prevState) => {
           return { ...prevState,
            enteredTitle: evtObj.target.value,
           }
       }) */
    }
    const amountChangeHandler = (evtObj) => {
        setEnteredAmount(evtObj.target.value);
        /* setEnteredInput((prevState) => {
            return { ...prevState,
                enteredAmount: evtObj.target.value,
               }
        }) */
    }
    const dateChangeHandler = (evtObj) => {
        setEnteredDate(evtObj.target.value);
        /* setEnteredInput((prevState) => {
            return { ...prevState,
                enteredDate: evtObj.target.value,
               }
        }) */
    }

    switch(props.inputType) {
        case 'text' : 
            return (
                <div class='input-group'>
                    <label>{props.labelContent}</label>
                    <input type={props.inputType}  
                        onChange={titleChangeHandler}/> 
                </div>
            ); 
             
        case 'number' : 
            return  (
                <div class='input-group'>
                    <label >{props.labelContent}</label>
                    <input type={props.inputType} 
                       min={props.minValue} 
                       step={props.stepValue}
                       onChange={amountChangeHandler}/> 
                </div>
            )
        case 'date':
            return (
                <div class='input-group'>
                    <label>{props.labelContent}</label>
                    <input type={props.inputType} 
                        min={props.minValue} 
                        max={props.maxValue}
                        onChange={dateChangeHandler} />
                </div>
            )
               
        default: return  <div> </div>;
    }
}

export default InputItem;