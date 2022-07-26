import React, { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0)
    const onIncrement = () => {
        setCount(count + 1)
    }

    return [count, onIncrement];
}

export default useCounter;