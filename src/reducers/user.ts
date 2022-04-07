interface UserState {
  name: string,
  user: any,
}

const initState: UserState = {
  name: 'eason',
  user: { first: 'asd' },
}

const user = (state = initState, action): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export default user
