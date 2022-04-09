import React from 'react'

const Ticker = (props) => {

  const stopTicker = () => {
    props.stopTicker(props.ticker.price_currency, props.ticker.id)
  }

  return(
    <div>
    <div className="tickerContainer">
      <div className="tickerDexUrl">{props.ticker.dex_url}</div>
      <div className="tickerSwapCurrency">{props.ticker.swap_currencies}</div>
      <div className="tickerPriceCurrency">{props.ticker.price_currency}</div>
      <div className="tickerFrequency">{`${props.ticker.chron_job_frequency} ${props.ticker.chron_job_frequency < 2  ? 'minute' : 'minutes'}`}</div>
      <div className="tickerCreated">{props.ticker.created}</div>
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
