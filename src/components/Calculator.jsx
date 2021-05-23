import React, { useState } from 'react'
import Output from './Output'

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
              <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={num1}
                onChange={(e)=> setNum1(+e.target.value)}
                />
              <span>+</span>
              <input type="number"
                name="num2"
                placeholder="Enter 2nd number"
                value={num2}
                onChange={(e)=> setNum2(+e.target.value)}
               />
              <button onClick={() =>makeResult()}>=</button>
              <Output value={result}/>
            </div>
          </div>
          
        )
    
}

export default Calculator

