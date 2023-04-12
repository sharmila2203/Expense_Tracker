import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import './ExpenseItem.css';
const ExpenseItem = (props = {}) => { // creating function with the name of ExpenseItem
    //const date = new Date().toISOString();
    //const title= "Leo";
    //const amount='100';
    console.log(props);
    
       // let { date =new Date(),title='',amount=0}=props;
        const [title, setTitle] = useState(props.title) ;
        const [date, setDate] = useState(props.date);
        const [amount, setAmount] = useState(props.amount);

        // let title = props.title;

        // function onChangeClick (event){
        //     console.log('ExpenseItemExpenseItemExpenseItem');
        //     setTitle('Updated');
        //     setDate(new Date());
        //     setAmount(0);
        //     console.log(title);
        // }

    // const year=date.getFullYear();
    // const month=date.toLocaleDateString('en-US',{month:'long'});
    // const day=date.toLocaleDateString('en-US',{day:'2-digit'});
    // console.log(year);
    return (
        <div className="expense-item">
            {/* <div className="date">{date}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div> */}
            <ExpenseDate date={date}/>
            <div className="expense-item__description" >
                <h2>{title}</h2>
                    {/* {props.title}</h2> */}
                <div className="expense-item__price">
                    {/* ${props.amount} */}
                    ${amount}
                </div>
                {/* <button onClick={onChangeClick}>Change</button> */}
            </div>
        </div>
    )
}


export default ExpenseItem;