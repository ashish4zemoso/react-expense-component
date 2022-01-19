import {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


const ExpenseItem = (props) => {

  const [newTitle, setTitle] = useState(props.title);

  const clickHandler = (evtObj) => {
    setTitle('Changed')
    console.log('clicked!')
  };
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>₹ {props.amount.toFixed(2)}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;