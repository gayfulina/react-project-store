import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpence/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {id: Math.random(), title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: Math.random(), title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 8, 13)},
    {id: Math.random(), title: 'New TV', amount: 799.49, date: new Date(2021, 3, 11)},
    {id: Math.random(), title: 'New Desk(Wooden)', amount: 450, date: new Date(2021, 6, 11)},
]

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
