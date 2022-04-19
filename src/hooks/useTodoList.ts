import { useState } from 'react'
import { Todo } from '../types/todoList'

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo) => {
        setTodos([
            ...todos,
            todo,
        ])
    }

    const SwitchTodoDoneStatus = (id: number) => {
        const targetTodoIndex = todos.findIndex(
            (todo: Todo) => todo.id === id
        )
        
        const newTodos = [...todos]

        newTodos[targetTodoIndex] = {
            ...newTodos[targetTodoIndex],
            done: !newTodos[targetTodoIndex].done,
        }

        setTodos(newTodos)
    }

    return { todos, addTodo, SwitchTodoDoneStatus } as const
}

export default useTodoList