import React from 'react'
import { post } from '../axios/requests'

const Ticker = (props) => {

  const stopTicker = () => {
    post("stopTicker", { tickerId: props.tickerId, currency: props.currency })
  }

  return(
    <div>
    <div className="tickerContainer">
      <div className="tickerPrice">{props.currency}</div>
      <button className="stopTickerButton" onClick={() => stopTicker()}>
        <i className="far fa-stop-circle"></i>
         Stop
      </button>
    </div>
    </div>
  )
}

export default Ticker
