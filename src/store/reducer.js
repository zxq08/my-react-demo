import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT } from './actionTypes'
const defaultState = {
    inputValue: 'Write Something For Hello ?',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
} // 默认数据
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
        newState.inputValue = action.value
        return newState
    } else if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
        newState.list.push(newState.inputValue)
        // newState.inputValue = '' // 改变不会影响视图？？
        console.log(newState)
        return newState
    } else if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}