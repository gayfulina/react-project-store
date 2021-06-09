import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const {date, amount} = props;

    const [title, setTitle] = useState(props.title);
    const [input, setInput] = useState('');

    const clickHandler = () => {
        setTitle(input)
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={date}/>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <input
                type="text"
                value={input}
                onChange={inputHandler}
            />
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;