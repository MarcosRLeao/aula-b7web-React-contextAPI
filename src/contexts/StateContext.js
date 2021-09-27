import { createContext, useContext, useReducer, useEffect } from 'react'
import ThemeReducer from '../reducers/ThemeReducer'
import UserReducer from '../reducers/UserReducer'

const initialState = {
  theme: ThemeReducer(),
  user: UserReducer()
}

const MainReducer = (state, action) => ({
  theme: ThemeReducer(state.theme, action),
  user: UserReducer(state.user, action)
})

export const StateContext = createContext()

const localState = JSON.parse(localStorage.getItem('context'))

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, localState || initialState)

  useEffect(() => {
    localStorage.setItem('context', JSON.stringify(state))
  }, [state])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
