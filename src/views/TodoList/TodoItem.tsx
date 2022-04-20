import React from 'react'
import { Todo } from '../../types/todoList'
import styles from './index.scss'

type TodoProps = {
    todo: Todo
    switchTodoDoneStatus: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoItem = (props: TodoProps) => {
    return (
        <div className={ styles.todoItem }>
            <span
                style={{ textDecoration: props.todo.done ? 'line-through' : "none" }}
            >
                { props.todo.name }
            </span>
            <div>
                <input
                    type="checkbox"
                    checked={ props.todo.done }
                    onChange={() => { props.switchTodoDoneStatus(props.todo.id) }}
                />
                <button
                    type="button"
                    onClick={() => { props.deleteTodo(props.todo.id) }}
                >
                    刪除
                </button>
            </div>
        </div>
    )
}

export default TodoItem