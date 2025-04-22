
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import {useState} from "react"
import { CardInicial } from "./components/CardInicial";

export function App(){
  const [nota, setNota] = useState(0);
  const[submited, setSubmited] = useState(false)

  const notas = [1,2,3,4,5]

  



  return(
   submited === false ? (
    <CardInicial nota={nota} setNota={setNota} setSubmited={setSubmited}/>
  
   ) : (
    <div className=" max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">
      <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration Thank You" />

      <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text-sm">You select {nota} out of 5.</p>

      <h1 className="text-2xl font-bold mb-2.5">Thank You!</h1>
      <p className="text-sm text-light-grey mb-6">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

    </div>
   )
  )
}