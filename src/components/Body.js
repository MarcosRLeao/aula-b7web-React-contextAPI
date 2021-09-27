import Botao from './Botao';
import Contagem from './Contagem';

import { useStateValue } from '../contexts/StateContext';

function Body () {
  const [state, dispatch] = useStateValue()

  const handleButton = () => {
    dispatch({
        type: 'setName',
        name: 'Leão'
    })
  }

  return (
    <article className={`box theme-${state.theme}`}>

      <Botao />
      <button onClick={handleButton}>Trocar para Leão</button>
      <Contagem />

    </article>
  )
}

export default Body
