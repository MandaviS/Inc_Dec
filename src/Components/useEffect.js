import React, { useEffect, useState } from 'react';
import "./style.css"

const UseEffect = () => {
    // const initialData = 10;
    const[myNum, setmyNum] = useState(0);

    useEffect(()=>{
     document.title = `Chats(${myNum})` 
    });   //useEffect will run only once on first render on use of [], empty array
    
    console.log(setmyNum);
  return (
    <>
    <div className="center_div">
      <p>{ myNum }</p>
      <div className="button2" onClick={()=>setmyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCREMENT
      </div>
    </div>
    </>
  );
}

export default UseEffect;