import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
import axios from 'axios';

const baseApiUrl = "https://www.fastmock.site/mock/e80eb75e8f763120ff49926b19d09b4a/api"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    componentDidMount() {
        const url = baseApiUrl + "/getList"
        axios.get(url).then(res => {
            console.log(res)
        })
    }

    render() { 
        return ( <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
        /> )
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;