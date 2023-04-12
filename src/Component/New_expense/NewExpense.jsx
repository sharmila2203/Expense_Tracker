import React from "react";
import ExpenseForm from "./Expense_form/ExpenseForm";
import './NewExpenses.css';

const NewExpense = (props) => {
    const onSave = (value) =>{
        const expense_data ={
            ...value,
            id: Math.random().toString()
        }
        props.onAddExpense(expense_data)
    }
    return (
        <div className="new-expense">
            <ExpenseForm
            onSave={onSave}/>
        </div>
    );
}

export default NewExpense;