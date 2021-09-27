import { useStateValue } from "../contexts/StateContext"

function Botao (props) {
    
  const [state, dispatch] = useStateValue()

  return (
    <button>
      nome: {state.user.name} - tema: {state.theme}
    </button>
  )
}

export default Botao
