import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        console.log('render---子组件渲染render执行')
        return ( 
            <div onClick={ this.handleClick }>
                { this.props.avname } 为你做 { this.props.content }
            </div>
         );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.content)
        console.log(this.props.content)
        if (nextProps.content !== this.props.content) {
            console.log('shouldComponentUpdate---组件发生改变前执行')
            return true
        } else {
            console.log('不执行')
            return false
        }
    }

    //shouldComponentUpdate返回true才会被执行。
    componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }

    componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }

    //当组件从页面中删除的时候执行
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }

    handleClick() {
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    avname: PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
 
export default XiaojiejieItem;