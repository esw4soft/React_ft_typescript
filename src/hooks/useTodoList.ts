import { useState } from 'react'
import { Todo } from '../types/todoList'

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [filterDoneTodo, setFilterDoneTodo] = useState<boolean>(false)

    // 新增
    const addTodo = (todo: Todo) => {
        setTodos([
            ...todos,
            todo,
        ])
    }

    // 完成狀態
    const SwitchTodoDoneStatus = (id: number) => {

        // 尋找點選的那個id
        const targetTodoIndex = todos.findIndex(
            (todo: Todo) => todo.id === id
        )
        
        // 新資料避免call by refrence
        const newTodos = [...todos]

        // 改變那筆資料的完成狀態
        newTodos[targetTodoIndex] = {
            ...newTodos[targetTodoIndex],
            done: !newTodos[targetTodoIndex].done,
        }

        setTodos(newTodos)
    }

    // 刪除
    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo: Todo) => (
            todo.id !== id
        ))
        
        setTodos(newTodos)
    }

    // 篩選條件
    const switchFilterDoneTodo = () => {
        setFilterDoneTodo(!filterDoneTodo)
    }

    let workTodos = todos
    if (filterDoneTodo) {
        workTodos = todos.filter(todo => !todo.done)
    }


    return { todos: workTodos, addTodo, SwitchTodoDoneStatus, deleteTodo, filterDoneTodo, switchFilterDoneTodo } as const
}

export default useTodoList