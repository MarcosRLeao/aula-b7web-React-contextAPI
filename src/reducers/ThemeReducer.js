const initialState = 'light'


const ThemeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setTheme':
      return action.theme

    // no default
  }
  return state
}
export default ThemeReducer;