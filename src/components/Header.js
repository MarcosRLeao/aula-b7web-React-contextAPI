import Botao from './Botao'
import { useStateValue } from '../contexts/StateContext'

function Header () {
  const [state, dispatch] = useStateValue()

  return (
    <header className={`box theme-${state.theme}`}>
        <p> Tema: 
        {state.theme === 'light' &&
        <button onClick={() => dispatch({type: 'setTheme', theme: 'dark'})}> dark</button>
        }
        {state.theme === 'dark' &&
        <button onClick={() => dispatch({type: 'setTheme', theme: 'light'})}> Light</button>
        }
      </p>
    </header>
  )
}

export default Header
