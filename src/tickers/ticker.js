import React from 'react'
import { post } from '../axios/requests'

const Ticker = (props) => {

  const stopTicker = () => {
    post("stopTicker", { currency: props.currency }).then(() => {
      props.getActiveTickers()
    })
  }

  return(
    <div>
    <div className="tickerContainer">
      <div className="tickerPrice">{props.currency}</div>
      <div className="tickerOptions">
      <button className="stopTickerButton button-red" onClick={() => stopTicker()}>
        <i className="far fa-stop-circle"></i> Stop
      </button>
      </div>
    </div>
    </div>
  )
}

export default Ticker
