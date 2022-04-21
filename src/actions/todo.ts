import { Todo } from '../types/todoList'

// 新增
/**
 * 格式
 * @param {string} type 行動類型
 * @param {object} payload 傳入資料
 * @returns 參考用
 */
interface AddTodo {
  type: 'ADD_TODO',
  payload: Todo,
}

// 刪除
interface DeleteAdd {
  type: 'DELETE_TODO',
  payload: number,
}

// 切換狀態
interface SwitchTodoDoneStatus {
  type: 'SWITCH_TODO_DONE_STATUS',
  payload: number,
}

// 篩選
interface SwitchFilterDoneTodo {
  type: 'SWITCH_FILTER_DONE_TODO',
}

export const addTodo = (todo: Todo): AddTodo => ({
  type: 'ADD_TODO',
  payload: todo,
})

export const DeleteTodo = (id: number): DeleteAdd => ({
  type: 'DELETE_TODO',
  payload: id,
})

export const switchTodoDoneStatus = (id: number): SwitchTodoDoneStatus => ({
  type: 'SWITCH_TODO_DONE_STATUS',
  payload: id,
})

export const switchFilterDoneTodo = (): SwitchFilterDoneTodo => ({
  type: 'SWITCH_FILTER_DONE_TODO',
})

export type TodoActionTypes = AddTodo | DeleteAdd | SwitchTodoDoneStatus | SwitchFilterDoneTodo
