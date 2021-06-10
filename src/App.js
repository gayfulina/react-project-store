import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpence/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const expenses = [
    {id: Math.random(), title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: Math.random(), title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 8, 13)},
    {id: Math.random(), title: 'New TV', amount: 799.49, date: new Date(2021, 3, 11)},
    {id: Math.random(), title: 'New Desk(Wooden)', amount: 450, date: new Date(2021, 6, 11)},
]

const addExpenseHandler = expense => {

}

function App() {
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
