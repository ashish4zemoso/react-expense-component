import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return ( 
    <Card className="expense-date">
        <div className="expense-date-day">{day}</div>
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div> 
    </Card>
    );
}

export default ExpenseDate;