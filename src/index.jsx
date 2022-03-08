import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { Provider, useSelector } from 'react-redux'
import store from './store'

const Task = (props) => {
  const { task } = props
  return <div>{task}</div>
}

// 定義props型別
Task.propTypes = {
  task: PropTypes.string,
}

// 定義props空值時的畫面
Task.defaultProps = {
  task: '',
}

const TodoList = () => {
  // const todoList = useContext(TodoListContext)
  const todoList = useSelector((state) => state.todoList)

  return todoList.map((task) => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ))
}

const TodoListPage = () => (
  <div>
    <div>其他內容</div>
    <TodoList />
  </div>
)

const CurrentTask = () => {
  // const todoList = useContext(TodoListContext)
  const todoList = useSelector((state) => state.todoList)
  return <div>{`下一件事做: ${todoList[0]}`}</div>
}

const Main = () => {
  const todoList = useSelector((state) => state.todoList)
  return (
    <div>
      <span>{`代辦事項數: ${todoList.length}`}</span>
      <TodoListPage />
      <CurrentTask />
    </div>
  )
}

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
)
