import React, { useEffect, useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('Hello')

    //useEffect(callback, dependency array) ->syntax 
    //useEffect(()=>{}, []) ()=>{} ->callback, []-> dependency array

    useEffect(() => {
        console.log('Call from global console');
        setText('BIT');
    }, [number]); // [] -> if it is empty array then it will call only once even the NUmber is updated & [Number] -> it will call when the Number is updated

    //console.log('Call from global console'); this line will call on every update so only we using useEffect to call only when it updates 
    return (
        <div>
            <div>{number}</div>
            <div>NEW APP</div>
            <div>{text}</div>
            <button onClick={()=>setNumber(Math.random())}>Update Number</button>
            <button onClick={()=>setText(Math.random())}>Update Text</button>
        </div>
    );
}

export default Counter