import React, { useState } from 'react'
import Output from './Output'
import NumberInput from './NumberInput'

const Calculator = () => {
  // const operators = ['+','-','*','÷']
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    

    const makeResult = () =>{
      const sumTotal = num1 + num2
      setResult(sumTotal)
    }
   
        return (
          <div className="container">
            <h1>Add with React!</h1>
            <div className="add">
              <NumberInput value={num1} handleChange={(e)=>setNum1(+e.target.value)}/>
              <span>+</span>
              <NumberInput value={num2} handleChange={(e)=>setNum2(+e.target.value)}/>
              <button onClick={() =>makeResult()}>=</button>
              <Output value={result}/>
            </div>
          </div>
          
        )
    
}

export default Calculator

