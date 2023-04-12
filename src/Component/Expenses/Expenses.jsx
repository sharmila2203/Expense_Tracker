import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'
const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <div className="expenses">
          {expenses.map((exp, index)=> ( // map - to avoid duplicated
            <ExpenseItem
            key ={exp.id} // key = {index}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
          ))};
      
      {/* <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}z
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}

    </div>
    )
}
export default Expenses