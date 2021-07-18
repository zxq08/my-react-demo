import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    placeholder='Hello World'
                    style={{ width:'250px' }}
                    onChange={props.changeInputValue}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{margin:'10px', width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    // dataSource={store.getState().list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>
                        )
                    }
                />
            </div>
        </div>
    );
}
 
export default TodoListUI;