import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (props) => {
    const month = new Date(props.date).toLocaleString('en-US', { month: 'long' });
    const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
    const year = new Date(props.date).getFullYear();

    return ( 
    <Card className="expense-date">
        <div className="expense-date-day">{day}</div>
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div> 
    </Card>
    );
}

export default ExpenseDate;