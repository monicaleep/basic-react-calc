import React, { useState, useEffect } from 'react'
import Output from './Output'
import NumberInput from './NumberInput'
import Operator from './Operator'

const Calculator = () => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const [color, setColor] = useState('')

    // Generate random RGB value for background
    useEffect(()=>{
      const red = Math.random() * 255
      const green = Math.random() * 255
      const blue = Math.random() * 255
      setColor(`rgb(${red},${green},${blue})`)
    },[])

    const handleClear = () =>{
      setNum1()
      setNum2()
      setResult()
    }

    

    const makeResult = () =>{
      const sumTotal = num1 + num2
      setResult(sumTotal)
    }
   
        return (
          <div className="container" style={{backgroundColor:color}}>
            <h1>Add with React!</h1>
            <div className="add">
              <NumberInput value={num1 || ''} handleChange={(e)=>setNum1(+e.target.value)}/>
              <Operator type="add"/>
              <NumberInput value={num2 || ''} handleChange={(e)=>setNum2(+e.target.value)}/>
              <button onClick={() =>makeResult()}>=</button>
              <Output value={result}/>
            </div>
            <button onClick={handleClear}>Clear</button>
          </div>
          
        )
    
}

export default Calculator

