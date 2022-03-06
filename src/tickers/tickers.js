import React from 'react'
import Ticker from './ticker'
import { get } from '../axios/requests'

class Tickers extends React.Component {

  state = {
    activeTickers: []
  }

  componentDidMount(){
    this.getActiveTickers()
  }

  getActiveTickers = () => {
    console.log("Getting tickers")
    get('getTickers').then((response) => {
      console.log(response.data)
      let data = response.data
      this.setState({ activeTickers: data })
    });
  }

  renderTickers = () => {
    let tickers = this.state.activeTickers.map((ticker, i) => {
      return <Ticker key={i} currency={ticker.currency} tickerId={ticker.ticker_id} />
    })
    console.log(tickers)
    return tickers
  }

  render(){
    return(
      <div>
        <h1>Active tickers</h1>
        <div>{this.state.activeTickers.length > 0 ? this.renderTickers() : "No don't currently have any active tickers"}</div>
      </div>
    );
  }
}

export default Tickers
