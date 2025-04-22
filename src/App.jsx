

import {useState} from "react"
import { CardInicial } from "./components/CardInicial";
import { CardFinal } from "./components/CardFinal";

export function App(){
  const [nota, setNota] = useState(0);
  const[submited, setSubmited] = useState(false)

  const notas = [1,2,3,4,5]

  



  return(
   submited === false ? (
    <CardInicial nota={nota} setNota={setNota} setSubmited={setSubmited}/>
  
   ) : (
    <CardFinal nota={nota}/>
   )
  )
}