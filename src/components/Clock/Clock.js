import moment from 'moment-timezone';
import { useState, useEffect } from "react";
import './Clock.css';

export default function Clock({place, timeZone, handlerClose}) {
  const [state, setState] = useState({
    seconds: {},
    minutes: {},
    hours: {},
  })

  useEffect(() => setState({
    seconds: {
      transform: `rotate(${(Number(moment().tz(timeZone).format('s')) * 6)}deg)`,
    },
    minutes: {
      transform: `rotate(${(Number(moment().tz(timeZone).format('m')) * 6 + Number(moment().format('s')) / 10)}deg)`,
    },
    hours: {
      transform: `rotate(${(Number(moment().tz(timeZone).format('h')) * 30 + Number(moment().format('m')) / 2)}deg)`,
    },
  }), [timeZone]);


  return (
    <div className='widget'>
      <div className='place_name'>{place}</div>
     
      <div className='clock'>
        <div className='point'></div>
        <div 
          className='close_btn'
          onClick = {() => handlerClose(place)}
        ></div>
        <div className='hours-container'>
          <div
            className={'hours ' + timeZone}
            style={state.hours}
          ></div>
        </div>
        <div className='minutes-container'>
          <div
            className={'minutes ' + timeZone}
            style={state.minutes}
          ></div>
        </div>
        <div className='seconds-container'>
          <div 
            className={'seconds ' + timeZone}
            style={state.seconds}
          ></div>
        </div>
      </div>
    </div>
  );
}
