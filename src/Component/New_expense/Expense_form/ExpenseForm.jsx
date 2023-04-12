import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => { // child to parent -> props & parent to child ->all back funtion
    const onSave = props.onSave;
    const [enteredTitle, setEnteredTitle]=useState('');  //[variable, functionname()]
    const [enteredAmount, setEnteredAmount]=useState(0); //[variable, functionname()]
    const [enteredDate, setEnteredDate]=useState(''); //[variable, functionname()]
    
    const onTitleChange = (event)=> setEnteredTitle(event.target.value);   
    const onAmountChange = (event) => setEnteredAmount(event.target.value);
    const onDateChange = (event) => setEnteredDate(event.target.value);
    
    

    const onExpenseSubmit = (event) => {
        event.preventDefault();
        console.log('Call from Form', enteredTitle, enteredAmount, enteredDate);
        const new_expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        onSave(new_expense);
    };
    return (
    
    
    <form onSubmit = {onExpenseSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlfor="title">Title</label>
                <input 
                    type ="text" 
                    id ="title" 
                    name ="title" 
                    value={enteredTitle} 
                    onChange={onTitleChange}>
                </input><br></br>
            </div>
            <div className="new-expense__control">
                <label htmlfor="amount">Amount</label>
                <input type="number" id ="amount" name="amount" min ="0" value={enteredAmount} onChange={onAmountChange}></input><br></br>
            </div>
            <div className="new-expense__control">
                <label htmlfor="date">Date</label>
                <input type="date" id = "date" name="date" value={enteredDate} onChange={onDateChange}></input>
            </div>   
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button>Cancel</button>
        </div>
    </form>
);

}
export default ExpenseForm