import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [toggle, setToggle] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        toggleHandler();
    };

    const toggleHandler = () => setToggle(!toggle);

    return (
        <div className="new-expense">
            {!toggle && <button onClick={toggleHandler}>Add New Expense</button>}
            {toggle && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                toggleHandler={toggleHandler}
            />}
        </div>
    )
};

export default NewExpense;