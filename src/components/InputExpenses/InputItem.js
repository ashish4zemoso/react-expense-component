import './InputItem.css'
/* import {useState} from 'react'; */

const InputItem = (props) => {
    
    switch(props.inputType) {
        case 'text' : 
            return (
                <div className='input-group'>
                    <label>{props.labelContent}</label>
                    <input type={props.inputType}
                    onChange={props.onChangeHandler}
                    value={props.currValue}
                    /> 
                </div>
            ); 
             
        case 'number' : 
            return  (
                <div className='input-group'>
                    <label >{props.labelContent}</label>
                    <input type={props.inputType} 
                       min={props.minValue} 
                       step={props.stepValue}
                       onChange={props.onChangeHandler}
                       value={props.currValue}
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
                    onChange={props.onChangeHandler}
                    value={props.currValue}
                    />  
                </div>
            )
               
        default: return  <div> </div>;
    }
    
}

export default InputItem;

/*export enteredDate;
export enteredAmount; */

 /* const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState(''); */

 /*    let newTitle = enteredInput.enteredTitle;
    let newAmount = enteredInput.enteredAmount;
    let newDate = enteredInput.enteredDate; */

    /* const newExpense = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }

    console.log(newExpense); */

    

    /* const Data = {
        title:enteredTitle ,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }  */
    // console.log(Data);