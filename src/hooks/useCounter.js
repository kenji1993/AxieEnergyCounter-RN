import { useState } from "react"

const useCounter = (initial) => {
    
    const [counter, setCounter] = useState(initial)

    const add = (number) => {
        if(number === 2) {
            setCounter(counter < 9 ? counter + number : 10)
        } else {
            setCounter(counter < 10  ?  counter + number : 10)
        }
        // setCounter(counter < 10  ?  counter + number : 10)
    }

    const subtract = (number) => {
        setCounter(counter > 0 ? counter - number : 0)
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
