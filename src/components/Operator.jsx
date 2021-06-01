import React  from 'react'


const Operator = (props) => {
    switch (props.type){
        case "add":
            return <span>+</span> 
        case "subtract":
            return <span>-</span>
        default:
            return <span></span>

    }
}

export default Operator