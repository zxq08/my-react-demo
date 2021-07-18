import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './xiaojiejieItem';
import axios from 'axios';

class Xiaojiejie extends Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: '', // input中的值
            list: [
                '头部按摩',
                '精油推背'
            ] // 服务列表
        };
    }

    render() {
        console.log('render---组件挂载中.......')
        return (
            <Fragment>
                {/*  */}
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={ (input) => { this.input = input } }
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ (ul) => { this.ul = ul } }>
                   {
                       this.state.list.map((item, index) => {
                           return (
                            /*
                                <li
                                    key = { index + item }
                                    onDoubleClick = { this.deleteItem.bind(this, index) }
                                >{item}</li>
                            */
                            <XiaojiejieItem
                                key = { index + item }
                                content = { item }
                                index = { index }
                                // avname= '波多野结衣'
                                deleteItem = { this.deleteItem.bind(this) }
                            />
                           )    
                       })
                   }
                </ul>
            </Fragment>
        )
    }

    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }

    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻执行')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => {
                console.log('axios 获取数据成功：' + JSON.stringify(res))
            })
            .catch((err) => {
                console.log('axios 获取数据失败：' + JSON.stringify(err))
            })
    }
    
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;