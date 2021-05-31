import React  from 'react'


const NumberInput = (props) => {
    return (
        <input type="number"
                    name="num1"
                    placeholder="Enter your number"
                    value={props.value}
                    onChange={props.handleChange}
                    />

    )
}

export default NumberInput