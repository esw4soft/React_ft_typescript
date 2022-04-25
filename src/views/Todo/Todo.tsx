import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { rootState } from '../../store'
import { Todo as ITodo } from '../../types/todoList'
import { getTodoById } from '../../actions/todo'
import styles from './index.scss'

const Todo = () => {
  const history = useHistory()
  const { id }: { id: string } = useParams()

  // 使用useparams取出參數id 再用useSelector比對所有代辦事項篩選出來
  // const todos: ITodo[] = useSelector(
  //   (state: rootState) => state.todos
  // )
  // const todo: ITodo = todos.find(
  //   (todo: ITodo) => todo.id === Number(id)
  // ) as ITodo

  // 使用dispatch 觸發reducer裡面的函示
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoById(Number(id)))
  })

  const todo: ITodo = useSelector(
    (state: rootState) => state.todo
  )

  return (
    <div className={styles.layout}>
      <div className={styles.todo}>
        <span>ID: {todo.id}</span>
        <h1>{ todo.name }</h1>
        <p>完成狀況: 
          <span style={{ color: todo.done ? '#21bf73' : '#eb8f8f' }}>
            {todo.done ? '已完成' : '未完成'}
          </span>
        </p>
        <button type="button" onClick={ () => { history.push('/') }}>回代辦事項列表</button>
      </div>
    </div>
    
  )
}

export default Todo