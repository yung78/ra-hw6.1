import Clocks from '../Clocks/Clocks';
import Form from '../Form/Form';
import { useState } from "react";
import './WorldTime.css'

export default function WorldTime() {
  const [clock, setClock] = useState([])

  return (
    <div className='world-time'>
      <Form 
        setClock = {setClock}
      />
      <Clocks 
        clock={clock}
        setClock = {setClock}
      />
    </div>
  );
}
