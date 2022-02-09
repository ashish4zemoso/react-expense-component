import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {

  if(props.items.length === 0){
    return  <h2 className='expenses-list__fallback'>
        Found no expenses for this year
    </h2> 
  }

  return <ul className="expenses-list">{
    props.items.map( (expenseObj) => (
        <ExpenseItem  
          key={expenseObj.id}
          title={expenseObj.title} 
          amount={expenseObj.amount}
          date={expenseObj.date} 
          />
        )) 
  }
  </ul>
}

export default ExpensesList;