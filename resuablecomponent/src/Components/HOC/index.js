import React, { useState } from 'react'
const CounterComponent = (Component) => {

    return Counter = () => {
        const [counter, setCounter] = useState(0)
       
        return (
            <Component  increment={counter} setIncrement={()=> setCounter(counter + 1)}/>
        )
    }

}

export default CounterComponent;
