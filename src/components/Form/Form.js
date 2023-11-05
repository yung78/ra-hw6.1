import { useState } from "react";
import './Form.css'

export default function Form({setClock}) {
  
  const [state, setState] = useState({
    place: '',
    timeZone: '',
  })
  
  const handlerChange = ({target}) => {
    const { className, value } = target;
    setState((prevState) => {
      return {
        ...prevState,
        [className]: value
      }
    });
    console.log(state)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!state.place || !state.timeZone) {
      return
    }

    setClock((prevState) => {
      return [...prevState, state]
    });
    
    setState({
      place: '',
      timeZone: '',
    })
  }
  
  
  return (
    <div className='clock-form'>
      <form 
        className='form'
        onSubmit={handlerSubmit}
      >
        <div>
          <label>Place</label>
          <input 
            className='place'
            onChange={handlerChange}
            value={state.place}
          ></input>
        </div>
        <div>
          <label>Time zone</label>
          <input 
            className='timeZone'
            onChange={handlerChange}
            value={state.timeZone}
          ></input>
        </div>
        <button className='btn' type='submit'>Add clock</button>
      </form>
    </div>
  );
}
