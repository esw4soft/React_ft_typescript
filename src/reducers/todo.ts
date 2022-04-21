import { Todo } from '../types/todoList'
import { TodoActionTypes } from '../actions/todo'

interface TodoState {
  todos: Todo[]
  displayTodos: Todo[]
  filterDoneTodo: boolean
}

const initialState: TodoState = {
  todos: [],
  displayTodos: [],
  filterDoneTodo: false,
}

const filterDisplayTodos = (filterDoneTodo: boolean, todos: Todo[]) => {
  if (filterDoneTodo) {
    return todos.filter(todo => !todo.done)
  }

  return [...todos]
}

const todos = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    default:
      return state
  }
}


/**
 * 太讚了ㄅ
 * @param {string} action 行動
 * @param {string} state 初始資料
 * @returns 修改後的資料
 */
export default todos