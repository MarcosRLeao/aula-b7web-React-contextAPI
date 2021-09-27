const initialState = {
  name: 'Marcos',
  email: 'marcos@fepi.br'
}

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }

    case 'setEmail':
      return { ...state, email: action.email }

    // no default
  }
  return state
}

export default UserReducer
