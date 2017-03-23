// 只是用来抽象用户的操作并不做任何改变

// 定义ID
let nextCount = 1
console.log(nextCount)
// 添加行为
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextCount++,
        text
    }
}

// 切换状态
export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

// 切换状态
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}