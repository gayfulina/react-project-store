import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map(el =>
                <div key={el.id}>
                    <ExpenseItem
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                </div>)}
        </Card>
    )
}

export default Expenses;