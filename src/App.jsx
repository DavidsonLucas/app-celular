import { useState } from 'react'
import ImgPes from './assets/img-pessoas.svg'
import * as c from './styled'
import { v4 as uuid } from 'uuid';

function App() {
const [comentario, setComentario] = useState([])
const [tasText, setTasText] = useState("")


  function digtNoText(event) {
      setTasText(event.target.value)

  }

  function clickNoButton() {
      setComentario([...comentario, { id: uuid(), task: tasText}])
    
  }

  function delet (id){
    const newlist = comentario.filter(item => item.id !== id)

  setComentario(newlist)
  
  }

  return (
    <c.Container>
      <img src={ImgPes} />
      <textarea onChange={digtNoText} >Coloque seu Comentario aqui !!</textarea>
      <button onClick={clickNoButton} className='bnt_comentar'>Cometar</button>

      <c.Ul>
        {
          comentario.map(item => (
            <li key={item.id}>{item.task}<c.Lixeira onClick={()=>delet(item.id)}/></li>
          ))
        }
      </c.Ul>
    </c.Container>
  )
}

export default App
