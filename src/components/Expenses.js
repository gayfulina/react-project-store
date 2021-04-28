import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="Card">
            {props.expenses.map(el =>
                <div key={el.id}>
                    <ExpenseItem
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                </div>)}
        </div>
    )
}

export default Expenses;