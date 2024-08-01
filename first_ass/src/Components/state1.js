import React,{useState} from "react";


const State1 = () => {

    let [num,setNum]=useState(100)
    return (
        <>
        <h1>{num}</h1>
        <button name="increment" onClick={()=>num<200?setNum(num+10):<p> Can't go beyond 200</p>}>increase by 10</button>
        <button name="decrement" onClick={()=>setNum(num-10)}>decrease by 10</button>
      
        </>
    );
}
  export default State1;