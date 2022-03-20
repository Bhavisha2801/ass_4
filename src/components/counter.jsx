import React from "react";
import styles from "./counter.module.css"


function Counter(){
    const [counter , setCounter] = React.useState(0)

    const incVal = (value) => {
        setCounter(counter + value)
    }

    const decVal = (value) => {
        setCounter(counter - value)
    }

    const doubleVal = (value) => {
        setCounter(counter * value)
    }


    return (
        <>
        <h1>Counter</h1>
        <h1>{counter}</h1>
        <button className={styles.inc} onClick={() => incVal(1)}>Increment</button>
        <button className={styles.dec} onClick={() => decVal(1)}>Decrement</button>
        <button className={styles.doub} onClick={() => doubleVal(2)}>Double</button>
        </>
    )
}

export { Counter }