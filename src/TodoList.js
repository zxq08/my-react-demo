import React, { useState } from 'react';
import 'antd/dist/antd.css'
import {Button} from 'antd'
function Example() {
    const [count, setCount] = useState(0)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('react')
    return (
        <div>
            <div>you clicked {count} times</div>
            <div>you are {sex}</div>
            <div>your work is: {work}</div>
            <Button onClick={() => {setCount(count+1)}}>click it</Button>
        </div>
    )
}

export default Example;

// import React, { Component } from 'react';
// import TodoListUI from './TodoListUI';
// import store from './store'
// import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState()
//         this.changeInputValue = this.changeInputValue.bind(this)
//         this.clickBtn = this.clickBtn.bind(this)
//         this.deleteItem = this.deleteItem.bind(this)
//         this.storeChange = this.storeChange.bind(this)
//         store.subscribe(this.storeChange) //订阅Redux的状态
//     }

//     render() { 
//         return ( <TodoListUI
//             inputValue={this.state.inputValue}
//             list={this.state.list}
//             changeInputValue={this.changeInputValue}
//             clickBtn={this.clickBtn}
//             deleteItem={this.deleteItem}
//         /> )
//     }

//     changeInputValue(e) {
//         const action = changeInputAction(e.target.value)
//         store.dispatch(action)
//     }

//     storeChange() {
//         this.setState(store.getState())
//     }

//     clickBtn() {
//         const action = addItemAction()
//         store.dispatch(action)
//     }

//     deleteItem(index) {
//         const action = deleteItemAction(index)
//         store.dispatch(action)
//     }
// }
 
// export default TodoList;