import { Todo } from '../types/todoList'
import { TodoActionTypes } from '../actions/todo'

interface TodoState {
  todos: Todo[]
  displayTodos: Todo[]
  filterDoneTodo: boolean
  todo: Todo
}

const initialState: TodoState = {
  todos: [],
  displayTodos: [],
  filterDoneTodo: false,
  todo: {
    id: 0,
    name: '無此資料',
    done: false,
  }
}

const filterDisplayTodos = (filterDoneTodo: boolean, todos: Todo[]) => {
  if (filterDoneTodo) {
    return todos.filter(todo => !todo.done)
  }

  return [...todos]
}

const todos = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        // 初始資料格式 const initialState
        ...state,

        // 原有資料+加入資料
        todos: [...state.todos, action.payload],

        // 要呈現在網頁的資料
        displayTodos: filterDisplayTodos(
          state.filterDoneTodo, [...state.todos, action.payload]
        )
      };
    }

    case 'DELETE_TODO': {
      const newTodos = state.todos.filter((todo: Todo) => {
        todo.id !== action.payload
      })
      return {
        ...state,
        todos: [...newTodos],
        displayTodos: filterDisplayTodos(
          state.filterDoneTodo, [...newTodos]
        )
      }
    }

    case 'SWITCH_TODO_DONE_STATUS' : {
      const targetTodoIndex = state.todos.findIndex(
        (todo: Todo) => todo.id === action.payload
      )

      const newTodos = [...state.todos]

      newTodos[targetTodoIndex] = {
        ...newTodos[targetTodoIndex],
        done: !newTodos[targetTodoIndex].done,
      }

      return {
        ...state,
        todos: [...newTodos],
        displayTodos: filterDisplayTodos(
          state.filterDoneTodo, [...newTodos]
        )
      }
    }

    case 'SWITCH_FILTER_DONE_TODO' : {
      return {
        ...state,
        filterDoneTodo: !state.filterDoneTodo,
        displayTodos: filterDisplayTodos(
          !state.filterDoneTodo, [...state.todos]
        )
      }
    }

    case 'GET_TODO_BY_ID': {
      const todo: Todo = state.todos.find((todo: Todo) => (
        todo.id === action.payload
      )) || initialState.todo

      return {
        ...state,
        todo,
      }
    }
    
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