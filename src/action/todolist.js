const ADD_TODO = 'ADD_TODO'

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
})

export { addTodo, ADD_TODO }
