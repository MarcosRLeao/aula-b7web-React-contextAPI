import Botao from './Botao'
import { useStateValue } from '../contexts/StateContext'

function Menu () {
  const [state, dispatch] = useStateValue()
  return (
    <aside className={`box theme-${state.theme}`}>
      <Botao />
    </aside>
  )
}

export default Menu
