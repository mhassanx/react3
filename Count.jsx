import { useState } from "react";

export default function Count() {
let [count , setCount] = useState(0);



let incCount = ()=>{

    setCount(count+1);
    console.log(count);
}

    return (
        <>
            <h1>Counter Function</h1>
            <h4>Count={count}</h4>
            <button onClick={incCount}>Increase Count</button>


        </>);
}