import { useState } from "react"

const useCounter = (initial) => {
    
    const [counter, setCounter] = useState(initial)

    const add = (number) => {
        setCounter(counter + number)
    }
    
    const subtract = (number) => {
        setCounter(counter - number)
    }

    const newMatch = (number) => {
        setCounter(number)
    }

    return {
        add,
        subtract,
        newMatch,
        counter,
    }
}

export default useCounter
