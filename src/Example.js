import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log(`useEffect => enter Index`)
        return () => {
            console.log(`useEffect => out Index`)
        }
    }, [])
    return <h2>Home Page</h2>
}

function List() {
    useEffect(() => {
        console.log(`useEffect => enter List`)
        return () => {
            console.log(`useEffect => out List`)
        }
    })
    return <h2>List Page</h2>
}

function Example() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`useEffect => You click it ${count} times`)
        return () => {
            console.log('===============')
        }
    },[count])
    return (
        <div>
            <div>you clicked {count} times</div>
            <button onClick={() => {setCount(count+1)}}>click it</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}/>
            </Router>
        </div>
    )
}

export default Example;