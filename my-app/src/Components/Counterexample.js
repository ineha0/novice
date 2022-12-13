import React, { useState } from 'react';

function Counterexample(){
    const [count,setCount]= useState(0)
    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() =>setCount(count+1)}>           
            </h1>
        </div>
    )
}
export default Counterexample
