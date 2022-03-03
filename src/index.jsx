import React, { useState, createContext, useContext } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

const TodoListContext = createContext()

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
  const todoList = useContext(TodoListContext)
  return todoList.map((task) => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ))
}

const TodoListPage = () => {
  const todoList = useContext(TodoListContext)
  return (
    <div>
      <div>其他內容</div>
      <TodoList todoList={todoList} />
    </div>
  )
}

const CurrentTask = () => {
  const todoList = useContext(TodoListContext)
  return <div>{`下一件事做: ${todoList[0]}`}</div>
}

const Main = () => {
  const [todoList] = useState(['first', 'second'])
  return (
    <TodoListContext.Provider value={todoList}>
      <div>
        <span>{`代辦事項數: ${todoList.length}`}</span>
        <TodoListPage />
        <CurrentTask />
      </div>
    </TodoListContext.Provider>
  )
}

ReactDom.render(
  <Main />,
  document.getElementById('root'),
)
