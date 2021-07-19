import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function Counter() {
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Example2() {
    const [ count, setCount ] = useState(0)

    return (
        <div>
            <p>{count} times</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default Example2;